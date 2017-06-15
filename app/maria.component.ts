import { Component } from '@angular/core';

@Component({
    selector: 'maria-app',
    template: '<p>{{Content}}</p>'
})
export class MariaComponent { 
	Content: string = 'This is where your content will go.'
 }