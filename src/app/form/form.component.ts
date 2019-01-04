import { Component, OnInit } from '@angular/core';
import { Profession } from '../interfaces/profession';
import { ProfessionService } from '../services/profession.service';
import { Movie } from '../interfaces/movie';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  API_ENDPOINT = "http://127.0.0.1:8000/api/";
  profession:Profession[];
  movie:Movie = {
    name: null,
    password: null,
    email: null,
    is_admin : 0,
    profession_id : 1,
  };
  id:any;
  editing : boolean = false;
  movies:Movie[];
  constructor(private professionService: ProfessionService,private moviesService: MoviesService, private activeRoute: ActivatedRoute) {
    this.getProfessions();
  
    this.id = this.activeRoute.snapshot.params['id']; // traemos e igualamos el id que viene en la url y el ['id'] es el mismo nombre del app-routing-module
    this.editGet(this.id);
  }
 
  ngOnInit() {
  }

  editGet(id){
    if(id){
      this.editing = true;
      this.moviesService.getAllUsers().subscribe((data:Movie[])=>{
          this.movies = data;
          this.movie = this.movies.find((answer)=>{return answer.id == id});
        },
        (error)=>{console.log(error);alert('Error en editar')}
      );
    }
    else{
      this.editing = false;
    }
  }

  getProfessions(){
    this.moviesService.getAllProfession().subscribe(
      (data:Profession[])=>{this.profession = data;},
      (error)=>{console.log(error); alert('Error al obtener las professiones')});
  }

  savePerson(){
    if(this.editing){
      this.moviesService.update(this.movie).subscribe(
        (data)=>{console.log(data);alert(data)},
        (error)=>{console.log(error); alert('Error al Actualizar');}
      );
    }
    else{
      this.moviesService.store(this.movie).subscribe(
        (data)=>{console.log(data);alert(data)},
        (error)=>{console.log(error); alert('Error al Guardar');}
      );
    }
  }
}
