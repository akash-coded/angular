/**
 * Number Data Type
 */
let num1: number = 123;
let num2: number = 0x37cf;
let num3: number = 0o377;
let num4: number = 0b111001;
let num5: number = 3.142;
let num6: number;

/**
 * String Data Type
 */
let firstName: string = "John";
let lastName: string = "Doe";
let gender: string = "M";

/**
 * Boolean Data Type
 */
let isMarried: boolean = true;
let isSingle: boolean = false;

/**
 * Null Data Type
 */
let nothing: null = null;

/**
 * Void Data Type
 */
let unusable: void = undefined;

/**
 * Never Data Type
 */
let noVal: never;

/**
 * Union Data Type
 */
let mixed: number | string | boolean = 123;
mixed = "abc";
mixed = true;
let nullable: number | null = 123;
nullable = null;

/**
 * Any Data Type
 */
let something: any = 123;
something = "abc";

/**
 * Array Data Type
 */
let primes: number[] = [2, 3, 5, 7, 11];
let fruits: string[] = ["Apple", "Banana", "Orange"];
let vegetables: Array<string> = ["Carrot", "Tomato", "Onion"];
let mixed1: (number | string)[] = [1, "Apple", 2, "Banana", 3, "Orange"];
let mixed2: Array<number | string> = [1, "Apple", 2, "Banana", 3, "Orange"];
let mixed3: any[] = [1, "Apple", true];
let mixed4: Array<any> = [1, "Apple", true];

/**
 * Tuple Data Type
 */
let person: [string, number, boolean] = ["John", 25, true];
let employees: [number, string][] = [
  [1, "John"],
  [2, "Jane"],
  [3, "Bob"],
];

/**
 * Enum Data Type
 */
// Numeric Enum
enum Colors {
  Red,
  Green = 5,
  Blue,
}
console.log(Colors.Red); // 0
console.log(Colors.Blue); // 6
console.log(Colors[5]); // Green -- Reverse Mapping in Enums

// String Enum
enum CountryCodes {
  USA = "US",
  UK = "GB",
  India = "IN",
}
console.log(CountryCodes.India); // IN
// Reverse Mapping is not supported for string enum members

// Heterogeneous Enum
enum Choices {
  No = 0,
  Yes = "YES",
}
console.log(Choices.Yes); // YES
console.log(Choices[0]); // No -- Reverse Mapping in Heterogeneous Enums is only supported for numeric type members
