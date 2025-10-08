const getInstallApps = () => {
    const storeAppsStr = localStorage.getItem("appList");

    if(storeAppsStr) {
        const storeAppsData = JSON.parse(storeAppsStr);
        return storeAppsData
    } else {
        return [];
    }
}

const addToAppsDB = (id) => {
    const getFunction = getInstallApps();

    if(getFunction.includes(id)) {
        alert("You have already get this book")
    }else {
        getFunction.push(id);
        const getStringifyData = JSON.stringify(getFunction);
        localStorage.setItem("appList", getStringifyData);   
        console.log(getFunction);           
    }
}

export {addToAppsDB, getInstallApps}