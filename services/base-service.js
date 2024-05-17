const fs = require('fs');
const util = require('util');
const getRootPath = require('../utils/root-path');
const { generateUniqueId } = require('../utils/common');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const DB_PATH = `${getRootPath()}database/db.json`;

const readAllJsonFromText = async () =>{
    const text = await readFileAsync(DB_PATH);
    return JSON.parse(text);
}

const getGenericTableData = async (tableKey) =>{
    const allData = await readAllJsonFromText();
    return allData[tableKey];
}

const addModelToTable = async (tableKey,model) =>{
    const allData = await readAllJsonFromText();
    const modelForAdding = {id:generateUniqueId(allData[tableKey]),...model};
    allData[tableKey].push(modelForAdding);
    await writeFileAsync(DB_PATH,JSON.stringify(allData,null,2));
    return modelForAdding;
}

const deleteModelFromTable = async (tableKey,id) =>{
    const allData = await readAllJsonFromText();
    allData[tableKey] = allData[tableKey].filter(x=>x.id !== id);
    await writeFileAsync(DB_PATH,allData);
    
}

const updateModel = async (tableKey,model) =>{
    const allData = await readAllJsonFromText();
    allData[tableKey] = allData[tableKey].filter(x=>x.id !== model.id);
    allData[tableKey].push(model);

}

module.exports = {
    getGenericTableData,
    addModelToTable,
    deleteModelFromTable,
    updateModel
}

