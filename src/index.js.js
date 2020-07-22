import React ,{Component} from 'react';

class NoteTaking extends Component {
    constructor(props)  {
        super(props);

        this.state= {
            item:[]

        }
        this.addNote = this.addNote .bind(this);
    }

    addNote(event)   {

        console.log("working");

        if(this.theTitle.value:="") {
            var newItem= {
                title; this.theTitle.value,
                note: this.theNote.value
            };
        }

        this.seState{(prevState)} => {
            return {
                item: prevState.items.concat(newItem);
            }
        }
        event.preventDefault();

    }


  render() {
     return {
       <div>
         <header>
                
            <h1> NoteTakingapp </h1>
      </header>
     <div  className =  " main - content">
      <ul>
         {this.state.items.map{(val)}}  => <li> (val.title  - (val.note)</li>
         </ul>
     <p>    our data will go here </p>
     </div>
     <footer>
     <form onSubmit =(this.addNote)>
     
        <font>
       <input type="text"
       placeholder="enter note title here"

       ref={(title)} =>  this.theTitle = title}</footer>
       />
       <textarea
          place="enter your note here"
          ref={(note) => this. theNote =note)
       
       />



       <textarea>
       <button type ="submit"> Add Note </button>



       </input>

     </font>
     </footer>


      </div>
    };
  }
}
        
         
}

export default NoteTaking;
