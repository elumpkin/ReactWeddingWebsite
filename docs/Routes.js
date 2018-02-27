import React from 'react';
import {BrowserRouter as Router, Route, Switch, browserHistory } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ButtonPage from './pages/ButtonPage';
import ButtonPagePro from './pages/pro/ButtonPage';
import CSSPage from './pages/CSSPage';
import TablePage from './pages/TablePage';
import BadgePage from './pages/BadgePage';
import BreadcrumbPage from './pages/BreadcrumbPage';
import FaPage from './pages/FaPage';
import ComponentsPage from './pages/ComponentsPage';
import ModalPage from './pages/ModalPage';
import JavaScriptPage from './pages/JavaScriptPage';
import ProgressPage from './pages/ProgressPage';
import InputPage from './pages/InputPage';
import InputPagePro from './pages/pro/InputPage';
import MediaPage from './pages/MediaPage';
import JumbotronPage from './pages/JumbotronPage';
import AlertPage from './pages/AlertPage';
import CardsPage from './pages/CardsPage';
import PaginationPage from './pages/PaginationPage';
import PopoverPage from './pages/PopoverPage';
import ListGroupPage from './pages/ListGroupPage';
import CarouselPage from './pages/CarouselPage';
import CollapsePage from './pages/CollapsePage';
import CollapsePagePro from './pages/pro/CollapsePage';
import TabsPage from './pages/TabsPage';
import TooltipsPage from './pages/TooltipsPage';
import FooterPage from './pages/FooterPage';
import MasksPage from './pages/MasksPage';
import DropdownPage from './pages/DropdownPage';
import VideoCarouselPage from './pages/VideoCarouselPage';
import HoverPage from './pages/HoverPage';
import SelectPage from './pages/pro/SelectPage';
import SideNavPage from './pages/SideNavPage';
import DatePickerPage from './pages/pro/DatePickerPage';
import TimePickerPage from './pages/pro/TimePickerPage';
import FormsPage from './pages/FormsPage';
import ScrollSpyPage from './pages/ScrollSpyPage';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/css' component={CSSPage} />
        <Route exact path='/css/table' component={TablePage} />
        <Route exact path='/components' component={ComponentsPage} />
        <Route path='/components/badge' component={BadgePage} />
        <Route path='/components/breadcrumb' component={BreadcrumbPage} />
        <Route path='/components/media' component={MediaPage} />
        <Route path='/components/input' component={InputPage} />
        <Route path='/components/pro/input' component={InputPagePro} />
        <Route path='/components/alert' component={AlertPage} />
        <Route path='/components/dropdown' component={DropdownPage} />
        <Route path='/css/icons' component={FaPage} />
        <Route path='/css/jumbotron' component={JumbotronPage} />
        <Route path='/components/cards' component={CardsPage} />
        <Route path='/components/buttons' component={ButtonPage} />
        <Route path='/components/forms' component={FormsPage} />
        <Route path='/components/pro/buttons' component={ButtonPagePro} />
        <Route path='/components/progress' component={ProgressPage} />
        <Route path='/components/popover' component={PopoverPage} />
        <Route path='/components/pagination' component={PaginationPage} />
        <Route path='/components/list-group' component={ListGroupPage} />
        <Route path='/components/tabs' component={TabsPage} />
        <Route path='/components/tooltips' component={TooltipsPage} />
        <Route path='/components/footer' component={FooterPage} />
        <Route exact path='/javascript' component={JavaScriptPage} />
        <Route path='/javascript/modal' component={ModalPage} />
        <Route path='/javascript/carousel' component={CarouselPage} />
        <Route path='/javascript/collapse' component={CollapsePage} />
        <Route path='/javascript/pro/collapse' component={CollapsePagePro} />
        <Route path='/javascript/videocarousel' component={VideoCarouselPage} />
        <Route path='/javascript/sidenav' component={SideNavPage} />
        <Route path='/css/masks' component={MasksPage} />
        <Route path='/css/hover' component={HoverPage} />
        <Route path='/javascript/pro/select' component={SelectPage} />
        <Route path='/javascript/pro/datepicker' component={DatePickerPage} />
        <Route path='/javascript/pro/timepicker' component={TimePickerPage} />
        <Route path='/javascript/scrollspy' component={ScrollSpyPage} />
        <Route render = { function() {
          return <h1>Not Found</h1>;
        }} />
      </Switch>
    );
  }
}

export default Routes;
