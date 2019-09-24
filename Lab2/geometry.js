function checkIsProperNumber(val, variableName) {
    if (typeof val !== "number") {
      throw `${variableName || "provided variable"} is not a number`;
    }
  
    if (isNaN(val)) {
      throw `${variableName || "provided variable"} is NaN`;
    }

    if (val < 0)
    {
       throw `${variableName || "provided variable"} is a negative integer`;  
    }

    if (val == 0)
    {
        throw `${variableName || "provided variable"} is 0`;
    }
  }
  
  const volumeOfRectangularPrism = function volumeOfRectangularPrism(length, width, height) 
{   
    checkIsProperNumber(length,"length");
    checkIsProperNumber(width,"width");
    checkIsProperNumber(height,"height");

    return length * width * height;    //formula for volume of a rectangular prism l * w * h
   
}

const surfaceAreaOfRectangularPrism = function surfaceAreaOfRectangularPrism(length, width, height)
{   
    checkIsProperNumber(length,"length");
    checkIsProperNumber(width,"width");
    checkIsProperNumber(height,"height");

    return 2 * ((width * length) + (height * length) + (height * width));  //formula for surafce area of a rectangular prism ((w*l) + (h*l) + (h*w))
}

const volumeOfSphere = function volumeOfSphere(radius)
{   
    checkIsProperNumber(radius,"radius");
    return 4 / 3 * (Math.PI * radius * radius * radius);  //formula for volume of a sphere is 4/3* Pi* r^3
}

const surfaceAreaOfSphere = function surfaceAreaOfSphere(radius)
{   
    checkIsProperNumber(radius,"radius");
    return 4 * Math.PI * radius * radius;      //formula for surface area of a sphere is 4 * Pi * r^2
}

//A=2(wl+hl+hw)

module.exports = {
    firstName: "Siddhant", 
    lastName: "Barua", 
    studentId: "10439929",

    volumeOfRectangularPrism,
    surfaceAreaOfRectangularPrism,
    volumeOfSphere,
    surfaceAreaOfSphere
   
};