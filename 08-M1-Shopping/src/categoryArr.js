export const categoryArrFunc = (data) => {
  const categoryArr = data.reduce((acc, product) => {
    if (!acc.includes(product.category)) {
      acc.push(product.category);
    }
    // console.log(acc);
    return acc;
  }, []);
  categoryArr.unshift("All");
  console.log(categoryArr);
  return categoryArr;
};
