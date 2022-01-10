const aggregateProduct = (dataObjects = []) => {
  if (! Array.isArray(dataObjects) || dataObjects.length === 0) {
    return null;
  } 
  let output = dataObjects[dataObjects.length - 1]

  for (var i=dataObjects.length - 2; i >= 0; i--) {
    output = Object.assign(output, dataObjects[i])
  }

  return output
}

module.exports = aggregateProduct
