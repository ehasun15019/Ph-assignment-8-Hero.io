const getInstallApps = () => {
    const storeAppsStr = localStorage.getItem("appList");

    if(storeAppsStr) {
        const storeAppsData = JSON.parse(storeAppsStr).map(Number);
        return storeAppsData
    } else {
        return [];
    }
}

const addToAppsDB = (id) => {
    const getFunction = getInstallApps();
    const numericId = Number(id);

    if(getFunction.includes(numericId)) {
        alert("You have already get this book")
    }else {
        getFunction.push(numericId);
        const getStringifyData = JSON.stringify(getFunction);
        localStorage.setItem("appList", getStringifyData);   
        console.log(getFunction);           
    }
}


const removeData = (id) => {
    const storedApp = getInstallApps();
    const numericId = Number(id);

    const updateApps = storedApp.filter((item) => {
        return(
            item !== numericId
        )
    })

    localStorage.setItem("appList", JSON.stringify(updateApps));

    return updateApps;
}

export {addToAppsDB, getInstallApps, removeData}