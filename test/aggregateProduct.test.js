const assert = require("assert");

const aggregateProduct = require('./../')

describe("aggregateProduct", () => {
  const productLayers = [
    {
      title: "Red pants",
      description:
        "Red pants are highly addictive, and made out of awesome stuff only!",
    },
    {
      title: "Red pants from manufacturor title",
      tags: ["red", "pants", "awesome"],
      images: [
        { src: "https://picsum.photos/200" },
        { src: "https://picsum.photos/350" },
      ],
    },
  ];

  const expectedOutput = {
    title: "Red pants",
    description:
      "Red pants are highly addictive, and made out of awesome stuff only!",
    tags: ["red", "pants", "awesome"],
    images: [
      { src: "https://picsum.photos/200" },
      { src: "https://picsum.photos/350" },
    ],
  };

  it("should aggregate product details", () => {
    const output = aggregateProduct(productLayers);

    assert.deepEqual(output, expectedOutput);
  });
});
