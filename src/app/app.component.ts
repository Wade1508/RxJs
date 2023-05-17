import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'RxJsCour';
  private subs : any;

 ngOnInit(): void {
  //creation d'u bjet observable
  const stream = new Observable((myObservable) => {
    myObservable.next("Boite 1");
    myObservable.next("Boite 2");
    myObservable.next("Boite 3");
    myObservable.complete();
  });

  //abonnement a cet objet observable
  const subscription = stream.subscribe(
    item => console.log("une boite arrive"),
    err => console.log("une erreur est survenue"),
    () => console.log("finish") 
  )

  console.log(subscription);

 }

 /**
   * OpenFlux
   */
 public OpenFlux() : void {
    this.subs =  interval(1000).subscribe(
      val => console.log(`valeur ${val}`),
      err => console.log("erreur"),
      () => console.log("terminer") 
    )
 }

 /**
  * CloseFlux
  */
 public CloseFlux() {
  this.subs.unsubscribe();
  console.log(`Flus ferme`);
  
 }

}
