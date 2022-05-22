import react from 'react'

export const useProdBySC = ({ id }) => {
    const [products, setProduct] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [refreshing, setRefreshing] = useState(false);
    const [filterProd, setFilterProd] = useState([]);
    const [search, setSearch] = useState("")

    // const { id } = route.params

    const fetchProducts = async () => {
        try {
            setLoading(true)
            const response = await fetch(
                //envs.DEV_API + `products`, {
                `https://afcollection.herokuapp.com/api/products`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
            );
            const responseData = await response.json();

            if (!response.ok) {
                throw new Error(responseData.message);
            }
            var data = responseData.data;
            if (id) {
                const newProd = data.filter((val) => {
                    return val.subCategory._id.toLowerCase().includes(id.toLowerCase())
                })
                setProduct(newProd)
                setFilterProd(newProd)
            } else {
                setProduct(data)
                setFilterProd(data)
            }


            setLoading(false);
        } catch (err) {
            setLoading(false);

            let errs = {}
            errs.api = err.message || "Something went wrong, please try again."
            console.log(err.message)
        }
    }

    const wait = timeout => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        fetchProducts()
        setSearch("")
        wait(2000).then(() => setRefreshing(false));
    }, []);

    const searchProducts = (text) => {
        if (text) {
            const newProd = products.filter((val) => {
                return val.name.toLowerCase().includes(search.toLowerCase())
            })
            setFilterProd(newProd)
            setSearch(text)
        } else {
            setFilterProd(products)
            setSearch(text)
        }
    }

    useEffect(() => {
        fetchProducts();
        return () => { }
    }, [id]);

    return { isLoading, refreshing, filterProd, onRefresh, searchProducts }
}