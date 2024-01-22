import styles from './page.module.scss'
import Header from '@ui/header/Header'
import dataset1 from '../../data/sncf/dataset1.json';
import Hero from '../contenu/hero';
import Donne from '../contenu/donne'
import Centre from '../contenu/donne';
import Calendrier from '../contenu/calendrier';
import Carte from '../../img/France.png'

export default function ChartsPage({searchParams = {}}) {
    let data;
    const rangedata:Number = 500;

    switch(searchParams.range){
        case 'mensuel':
            data = dataset1.slice(0,rangedata).filter((e: any) => {return Number(e.Mois_circulation) === 10})
        break;
    
        case 'trimestriel':
            data = dataset1.slice(0,rangedata).filter((e: any) => {return Number(e.Mois_circulation) >=7 && Number(e.Mois_circulation) <=9})
        break;
    
        case 'annuel':
            data = dataset1.slice(0,rangedata).filter((e: any) => {return Number(e.Mois_circulation) >= 1 && Number(e.Mois_circulation) <= 10})
        break;
    }
    
    return (
        <main className={styles.main}>
            <div className={styles.main_inner}>
                <div className={styles.header}>
                    <Hero data={data} searchParams={searchParams}/>
                </div>
                <div id='centreCut'>
                    <div>
                        <div className={styles.filtreCentre}>
                            <div>
                                <Header current={'charts'} searchParams={searchParams}/>
                            </div>
                            <div>
                                <Centre data={data} searchParams={searchParams}></Centre>
                            </div>
                        </div>
                    </div>
                    <div id='contenu'>
                        <div className={styles.centre}>
                            <div>
                                <span>carte</span>
                            </div>
                        </div>
                        <div className={styles.chartDroite}>
                            <div>
                                <Calendrier data={data} searchParams={searchParams}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}