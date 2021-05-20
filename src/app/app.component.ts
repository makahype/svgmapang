import { Component } from '@angular/core';
import { STATESCONFIG } from './us-states';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  //model
  states = STATESCONFIG.states;
  combineconfig = STATESCONFIG.combine;


  //form inputs
  title = 'Data of United States';

  statesel = this.states[0].id;
  currstate:any = this.states[0];
  combinebox = 0;
  state_sel_arr = [];

  constructor(){
    //this.state_sel_arr.push(this.states[0].id);
    //this.selectState(this.states[0].id);
  }


  //map click interaction function
  selectState(id): void{

    //clear all prevoius elements if 
    //switching from combine to single select
    if(!this.combinebox){

        //clear group array
        this.state_sel_arr = [];        
    }

    //update new id
    this.state_sel_arr.push(id);    
    this.statesel = id;

    //update map and data
    this.changeDisplay(id);
  }

 //dropdown box interaction function
  changeMap(){

    var id = this.statesel;
    
    //if not combining the clear the data
    if(!this.combinebox){
        this.state_sel_arr = [];
    }

    //update selected array and change display
    this.state_sel_arr.push(id);
    this.changeDisplay(id);

  }


  //change data and map display
  changeDisplay(id): void{

     if(!this.combinebox){

        var elems = document.querySelectorAll("g.selected");
        [].forEach.call(elems, function(el) {
            el.classList.remove("selected");
        });

    }
    document.getElementById(id).classList.add('selected');


    //data update
    if(this.combinebox){

        var filter_states:any = this.states.filter(state => this.state_sel_arr.includes(state.id));

        //get all states
        var combined_data = false;
        filter_states.forEach(state => {
            combined_data = this.appendCombinedData(combined_data, state);
        });

        //format states as one clump of state data
        this.currstate = combined_data;

    }else{
       var filter_states:any = this.states.filter(state => state.id == id);           
       this.currstate = filter_states[0];

    }

  }



  //function  that handles the combining of state data if the combine box
  //is selected this is also determined by setting the combine configuartion
  appendCombinedData(master_data, item){

    if(master_data == false){
        //if you structue  the object to where this  line breaks for you 
        //I would suggest writing your own data map from scratch
        //at this point your data is too complex for me to be able to 
        //predict how to handle your situation
        master_data = JSON.parse(JSON.stringify(item));
    }else{

        //combine data based on the configuration
        this.combineconfig.forEach(attri => {
            if(attri.type == 'str'){
                master_data[attri.lbl] = master_data[attri.lbl] + " - " + item[attri.lbl];
            }else{
                master_data[attri.lbl] = master_data[attri.lbl] + item[attri.lbl];
            }
        });
    }


    return master_data;
  }



}
