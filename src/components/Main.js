import React from 'react'
import Home from './Home/Home';
import './Main.scss';

const Main = (props) => {
  return (
    <div>
        <Home/>
        <button onClick={props.colorTheme}>Click</button>
    </div>
  )
}

export default Main
// https://preview.themeforest.net/item/inbio-one-page-personal-portfolio-template/full_screen_preview/33188244?_ga=2.68992916.405136078.1655988741-705281971.1640202805&_gac=1.253250427.1655750905.CjwKCAjwtcCVBhA0EiwAT1fY7wAp3TKjpQPa3h91upM_ES4lXjw1FEWbC9EF7jfDZHN5QpHXCBQV2xoCscYQAvD_BwE