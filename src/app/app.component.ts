import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  startLearning(): void {
    // Aquí podrías redirigir al usuario a la pantalla de aprendizaje
    console.log('Starting the learning journey...');
  }
}
