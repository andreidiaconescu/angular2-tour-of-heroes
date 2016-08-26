import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';


@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css']
})
export class HeroesComponent implements OnInit {
    title = 'Tour of Heroes';
    selectedHero:Hero;
    heroes:Hero[];
    error:any;
    addingHero = false;

    ngOnInit():void {
        this.getHeroes();
    }

    constructor(private router:Router,
                private heroService:HeroService) {
    }

    getHeroes():void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    onSelect(hero:Hero):void {
        this.selectedHero = hero;
    }

    gotoDetail():void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }


    addHero():void {
        this.addingHero = true;
        this.selectedHero = null;
    }

    close(savedHero:Hero):void {
        this.addingHero = false;
        if (savedHero) {
            this.getHeroes();
        }
    }

    deleteHero(hero:Hero, event:any):void {
        event.stopPropagation();
        this.heroService
            .delete(hero)
            .then(res => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) {
                    this.selectedHero = null;
                }
            })
            .catch(error => this.error = error);
    }

}