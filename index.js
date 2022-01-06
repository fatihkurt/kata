const aggregateProduct = (dataObjects = []) => {
  let output = dataObjects[0]

  for (var i=1; i < dataObjects.length; i++) {
    output = Object.assign(output, dataObjects[i])
  }

  return output
}

module.exports = aggregateProduct
