// enum -> direct -> 0,1,2
// enum -> values

enum Gender {
  Male = "Male",
  Female = "Female",
}

enum Size {
  Small,
  Medium,
  Large,
}

// Get Object values and keys

const person = {
  name: "Hello",
  age: 40,
};

//Object.values(obj) => ['Hello', 40]
//Object.keys(obj) => ['name', 'age']

//How to get type of a type

interface Person {
  name: string;
  age: number;
}

// typeof Person => [string, number]
// keyof Person => [name, age]

// as in TS
// const value: string = '0'
// value as number
