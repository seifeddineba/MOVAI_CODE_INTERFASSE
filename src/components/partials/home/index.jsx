import React, { useRef } from 'react'
import '../../../styles/style.css'
import Header from '../../Modules/header/index'
import NavButton from '../../Modules/nav_button/index'
import Line from '../../Modules/line/index'
import Paragraph from '../../Modules/paragraph'
import VerticalCard from '../../Modules/vertical-card'
import HorizontalCard from '../../Modules/horizontal-card'
import DoctorCard from '../../Modules/doctor-card'
import Footer from '../../Modules/footer'
import title1 from '../../../assets/img/title-1.png'
import title2 from '../../../assets/img/title-2.gif'
import title3 from '../../../assets/img/title-3.gif'
import title4 from '../../../assets/img/title-4.gif'
import title5 from '../../../assets/img/title-5.png'
import traitement1 from '../../../assets/img/traitement-1.jpg'
import traitement2 from '../../../assets/img/traitement-2.jpg'
import traitement3 from '../../../assets/img/traitement-3.jpg'
import symp1 from '../../../assets/img/symp1.jpg'
import symp2 from '../../../assets/img/symp2.jpg'
import symp3 from '../../../assets/img/symp3.jpg'
import prev1 from '../../../assets/img/prev-1.png'
import doc1 from '../../../assets/img/doctor-1.jpg'
import doc2 from '../../../assets/img/doctor-2.jpg'
import doc3 from '../../../assets/img/doctor-3.jpg'





function home() {

    const sectionCause = useRef()
    const sectionTraitement = useRef()
    const sectionSymptome = useRef()
    const sectionPrevention = useRef()
    const sectionDoctor = useRef()


    const goToSection = (ref)=>{
        console.log(ref)
        ref.current.scrollIntoView({behavior:"smooth"})
    }

  return (
    <>
        <Header/>

            <section className='container'>
                <div className='btns-section'>
                    <NavButton content="la cause de SIDA" color="#c659c8" textColor="#fff" fontSize="30px" handleSection={()=>goToSection(sectionSymptome)}/>
                    <NavButton content="les symptômes" color="#c88659" textColor="#000" fontSize="20px" handleSection={()=>goToSection(sectionPrevention)}/>
                    <NavButton content="Prévention" color="#2b364b" textColor="red" fontSize="12px" handleSection={()=>goToSection(sectionDoctor)}/>
                    <NavButton content="Traitement" color="rgb(33 180 59)" textColor="blue" fontSize="25px" handleSection={()=>goToSection(sectionTraitement)}/>
                </div>
            </section>

            <Line/>

            <section className='ltr-direction container' ref={sectionCause}>
                <div className='flex-center m-tb-2'>
                    <img src={title1} alt="img-1" />
                </div>

                <Paragraph paragraph="Quelle est la cause de la maladie du sida ? Le VIH peut se transmettre par l'échange de liquides corporels provenant de personnes infectées comme le sang, le lait maternel, le sperme et les sécrétions vaginales. Il peut aussi se transmettre de la mère à l'enfant pendant la grossesse et lors de l'accouchement."/>
            </section>

            <Line/>

            <section className='container' ref={sectionTraitement}>
                <div className='flex-start m-tb-2'>
                    <img src={title2} alt="img-2" />
                </div>

                <div className='d-flex'>
                    <button className="btn-slider">next <i class="fa fa-arrow-left" aria-hidden="true"></i></button>
                    <VerticalCard img={traitement1} imgW="188" imgH="180" color="rgb(44 59 188)" bgColor="rgb(239 148 102)" paragraph="La maladie induite par le VIH peut être prise en charge au moyen de schémas thérapeutiques reposant sur une association de trois médicaments antirétroviraux ou plus. À l’heure actuelle, le traitement antirétroviral ne guérit pas de l’infection à VIH, mais supprime la réplication du virus et permet au système immunitaire de se renforcer et de reconstituer sa capacité à combattre les infections opportunistes et certains cancers."/>
                    <VerticalCard img={traitement2} imgW="250" imgH="150" color="rgb(45 68 205)" bgColor="rgb(204 0 0)" paragraph="Depuis 2016, l’OMS recommande d’administrer à vie un traitement antirétroviral à toutes les personnes vivant avec le VIH : enfants, adolescents, adultes, femmes enceintes et femmes allaitantes, indépendamment de leur statut clinique ou de leur numération des CD4. C’est la stratégie « Un traitement pour tous ». En juin 2022, 189 pays avaient déjà adopté cette recommandation qui couvre 99 % des personnes vivant avec le VIH dans le monde. En plus de la stratégie « Un traitement pour tous », l’OMS recommande de mettre rapidement en place un traitement antirétroviral pour toutes les personnes vivant avec le VIH, y compris en le proposant dès le jour même du diagnostic à celles qui sont prêtes à le commencer. En juin 2022, 97 pays avaient déclaré avoir adopté cette politique et presque les deux-tiers d’entre eux avaient confirmé l’avoir mise en œuvre à l’échelle nationale. Dans le monde, 28,7 millions de personnes vivant avec le VIH recevaient un traitement antirétroviral en 2021. La couverture mondiale était de 75 % [66–85 %] pour ce type de traitement en 2021"/>
                    <VerticalCard img={traitement3} imgW="180" imgH="241" color="rgb(3 252 70)" bgColor="rgb(26 197 101)" paragraph=" Il n’en reste pas moins qu’il faut redoubler d’efforts pour généraliser le traitement, en particulier pour les enfants et les adolescents. En effet, seuls 52 % [42-65 %] des enfants recevaient un traitement antirétroviral à la fin de 2021. L’infection à VIH à un stade avancé est un problème persistant dans la riposte au VIH. Des sujets présentant une suppression immunitaire avancée, qui accroît le risque de développer des infections opportunistes, continuent d’intégrer ou de réintégrer les parcours de soins. L’OMS apporte un appui aux pays afin qu’ils mettent en place l’ensemble de soins pour le VIH à stade avancé, afin de réduire la maladie et les décès."/>
                    <button className="btn-slider">privious <i class="fa fa-fast-forward" aria-hidden="true"></i></button>
                </div>
            </section>
           
            <Line/>

           <section ref={sectionSymptome}>
                 <div className='flex-end m-tb-2'>
                    <img src={title3} alt="img-3" />
                </div>

                <div>
                    <HorizontalCard img={symp1} CardimgW="250" imgH="200" color="rgb(252 146 3)" paragraph="de la fièvre / une fatigue / des douleurs musculaires "/>
                    <HorizontalCard img={symp2} CardimgW="400" imgH="300" color="rgb(112 109 109)" bgColor="rgb(212 31 148)" paragraph="des frissons / un mal de gorge / l'enflure de glandes (ganglions lymphatiques)"/>
                    <HorizontalCard img={symp3} CardimgW="350" imgH="141" color="#20fc03" bgColor="#9699d6" paragraph="des maux de tête / des douleurs articulaires"/>
                </div>
           </section>
           
           <Line/>

            <section ref={sectionPrevention}>
                <div className='flex-start m-tb-2'>
                    <img src={title4} alt="img-4" />
                </div>

                <div className='d-flex'>
                    <VerticalCard img={prev1} imgW="188" imgH="141" color="#20fc03" bgColor="#9699d6" paragraph="Au niveau individuel, on peut réduire le risque d’infection par le VIH en limitant l’exposition aux facteurs de risque. Parmi les principales démarches de prévention du VIH, souvent associées entre elles, figurent : l’utilisation du préservatif masculin ou féminin ; la prévention, le dépistage et le conseil pour le VIH et les IST ; la circoncision médicale volontaire de l’homme"/>
                    <VerticalCard img={prev1} imgW="108" imgH="100" color="#0380fc" bgColor="#9fc4af" paragraph="l’utilisation de médicaments antirétroviraux à titre préventif (prophylaxie préexposition orale et produits à longue durée d’action), de l’anneau vaginal de dapivirine et du cabotégravir injectable à longue durée d’action ; la réduction des effets nocifs pour les consommateurs de drogues par injection ;"/>
                    <VerticalCard img={prev1} imgW="180" imgH="241" color="#fc6203" bgColor="#c0c7b1" paragraph="et l’élimination de la transmission mère-enfant du VIH. Il n’y a pas de transmission du VIH lorsque le partenaire sexuel a une suppression virale du fait d’un traitement antirétroviral. Par conséquent, les mesures pour améliorer l’accès au dépistage et favoriser l’accès au traitement antirétroviral sont une composante importante de la prévention du VIH."/>
                </div>
            </section>

            <section className='container' ref={sectionDoctor}>
                    <div className='flex-start m-tb-2'>
                        <img src={title5} alt="img-5" />
                    </div>

                    <div className='d-flex gap-5'>
                        <DoctorCard img={doc1} fullName="Emilie Oberdorff" email="Emilie_Oberdorff@gmail.fr"/>
                        <DoctorCard img={doc2} fullName="Angéla Bachette" email="Angéla_Bachette@gmail.fr"/>
                        <DoctorCard img={doc3} fullName="Andréa BONNAUD" email="AndréaBONNAUD@gmail.fr"/>
                    </div>
                </section>

            <div className='flex-end'>
                <button className='btn-go-to-top'  onClick={()=>{window.scrollTo({ top: 2000, behavior: 'smooth' })}}>
                    Go to top<i class="fa fa-arrow-down" aria-hidden="true"></i>
                </button>
            </div>
       

        <Footer/>
        

    </>
  )
}

export default home