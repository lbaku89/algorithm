/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  image = image
    .map((row) => row.reverse())
    .map((row) => {
      return row.map((v) => {
        return v === 0 ? 1 : 0;
      });
    });

  return image;
};
