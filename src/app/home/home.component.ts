import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../services/movies.service';
import { ProfessionService } from '../services/profession.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Movie } from '../interfaces/movie';
import { Profession } from '../interfaces/profession';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  movies:Movie[];
  profession: Profession[];

  constructor(private moviesServices: MoviesService, private professionServices : ProfessionService, private httpClient: HttpClient) {

    this.getUsers();
    this.getProfessions();
  }

  ngOnInit() {

  }

  getUsers(){
    this.moviesServices.getAllUsers().subscribe(
      (data:Movie[])=>{this.movies = data;},
      (error)=>{console.log(error); alert('Error al obtener todos los usuarios')}
    );
  }
  getProfessions(){
    this.moviesServices.getAllProfession().subscribe((data:Profession[])=>{this.profession = data;}, (error)=>{console.log(error); alert('Error al obtener las profesiones')});
  }

  delete(id){
    if(confirm("Deseas eliminar el usuario?")){
        this.moviesServices.delete(id).subscribe(
        (data)=>{ alert(data); // aca retornara el mensaje que traera del back-end 
                 this.getUsers(); /* Volvemos hacer el llmado de las los usuarios*/},
        (error)=>{console.log(error); alert("Error al eliminar");}
      );
    }
  }

  Role(item){
    if(item){
        return "Adminitrador";
    }
    else{
      return "Usuario";
    }
 }

 Profession(item){
   for (var i of this.profession){
      if(item == i.id){
          return i.title;
      }   
   }
 }
}
