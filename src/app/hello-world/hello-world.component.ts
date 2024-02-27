import { Component } from '@angular/core';
import { FilhoAComponent } from "../filho-a/filho-a.component";
import { FilhoBComponent } from "../filho-b/filho-b.component";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-hello-world',
    standalone: true,
    templateUrl: './hello-world.component.html',
    styleUrl: './hello-world.component.css',
    imports: [FilhoAComponent, FilhoBComponent, RouterModule, CommonModule]
})
export class HelloWorldComponent {

    textoVaiProFilho: string = '';

    textoVeioDoFilho: string = '';

}
