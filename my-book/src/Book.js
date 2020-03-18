import React, { Component } from 'react'
import hobbit from "./hobbit.jpeg"
import last_smile from "./last-smile.jpeg"

class Book extends Component {
  constructor() {
    super()
    this.state = {
      books: [{
        title: 'The Hobbit', image: hobbit, desc: "Lorem ipsum dolor sit amet, nostrud scriptorem ne sit, gloriatur consequuntur his an. His vivendum hendrerit intellegat in, ut eam stet mnesarchum, his eu virtute civibus. Dicunt necessitatibus his te. Est veniam dolore nostrum ex. Purto labitur ne eam, "
      }, {
        title: 'The Last Smile In Sunder City', image: last_smile, desc: "Lorem ipsum dolor sit amet, nostrud scriptorem ne sit, gloriatur consequuntur his an. His vivendum hendrerit intellegat in, ut eam stet mnesarchum, his eu virtute civibus. Dicunt necessitatibus his te. Est veniam dolore nostrum ex. Purto labitur ne eam, "
      }],
    }
  }
  render() {
    return (
      <div className="book-container">
        {
          this.state.books.map(book => (
            <div className="book-box">
              <h1>{book.title}</h1>
              <div className="cover-desc">
                <img className="cover" src={book.image} />
                <p className="desc">{book.desc}</p>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}
export default Book




// import React, { Component } from 'react'
// class Book extends Component {
//   constructor() {
//     super()
//     this.state = {
//       book1: { title: 'Cool book name', image: 'ali', desc: 400 },
//       book2: { title: 'Cool book name', image: 'ali', desc: 400 }
//     }
//   }
//   render() {
//     return (
//       <div>
//         <div>
//           <h1>{this.state.book1.title}</h1>
//           <img src={this.state.book1.image} />
//           <p>{this.state.book1.desc}</p>
//         </div>
//         <div>
//           <h1>{this.state.book2.title}</h1>
//           <img src={this.state.book2.image} />
//           <p>{this.state.book2.desc}</p>
//         </div>
//       </div>
//     )
//   }
// }
// export default Book