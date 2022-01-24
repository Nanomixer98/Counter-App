export const getDummyData = async () => {

    try {

        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/10`);
        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        const data = await res.json(); 
        // console.log(data);

        return {data, status: res.status};

    } catch (error) {
        // manejo del error
        // console.error(error);
        return error;
    } 
    
}

getDummyData();
