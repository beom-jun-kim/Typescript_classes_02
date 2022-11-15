// type words = {
//     [whatever: string]: string

//     /* object의 Type을 선언해야할때 사용 */
//     /* 제한된 양의 property만을 가질 수 있다 */
//     /* 타입만을 알때 */
// }

// let dict: words = {
//     1: "food",
//     2: ""
// }

// class Dict {
//     private words: words
//     constructor() {
//         this.words = {}
//     }
//     add(word: word) {
//         if (this.words[word.term] === undefined) {
//             this.words[word.term] = word.def;
//         }
//     }
//     def(term:string){
//         return  this.words[term]
//     }
// }

// class word {
//     constructor(
//         public term: string,
//         public def: string
//     ) { }
// }

// const kimchi = new word("kimchi", "한국의 음식");
// const dict = new Dict()

// dict.add(kimchi);
// dict.def("kimchi");