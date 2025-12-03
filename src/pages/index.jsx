import Layout from "./Layout.jsx";

import Home from "./Home";

import InstallationChaudiere from "./InstallationChaudiere";

import DepannageRapide from "./DepannageRapide";

import EntretienChaudiere from "./EntretienChaudiere";

import DetectionFuiteGaz from "./DetectionFuiteGaz";

import APropos from "./APropos";

import Contact from "./Contact";

import ZonesIntervention from "./ZonesIntervention";

import Blog from "./Blog";

import BlogPost from "./BlogPost";

import BlogAdmin from "./BlogAdmin";

import BlogEditor from "./BlogEditor";

import InstallationClimatiseur from "./InstallationClimatiseur";

import Sitemap from "./Sitemap";

import SitemapXML from "./SitemapXML";

import ChauffagisteIxelles from "./ChauffagisteIxelles";

import ChauffagisteUccle from "./ChauffagisteUccle";

import ChauffagisteWoluwe from "./ChauffagisteWoluwe";

import CalculateurEconomies from "./CalculateurEconomies";

import DiagnosticChaudiere from "./DiagnosticChaudiere";

import GuideChoixChaudiere from "./GuideChoixChaudiere";

import ChauffagisteSchaerbeek from "./ChauffagisteSchaerbeek";

import ChauffagisteAnderlecht from "./ChauffagisteAnderlecht";

import ChauffagisteEtterbeek from "./ChauffagisteEtterbeek";

import TestimonialsAdmin from "./TestimonialsAdmin";

import ChauffagisteBruxellesVille from "./ChauffagisteBruxellesVille";

import ChauffagisteMolenbeek from "./ChauffagisteMolenbeek";

import ChauffagisteSaintGilles from "./ChauffagisteSaintGilles";

import ChauffagisteJette from "./ChauffagisteJette";

import ChauffagisteKoekelberg from "./ChauffagisteKoekelberg";

import Service from "./Service";

import ServicesAdmin from "./ServicesAdmin";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    InstallationChaudiere: InstallationChaudiere,
    
    DepannageRapide: DepannageRapide,
    
    EntretienChaudiere: EntretienChaudiere,
    
    DetectionFuiteGaz: DetectionFuiteGaz,
    
    APropos: APropos,
    
    Contact: Contact,
    
    ZonesIntervention: ZonesIntervention,
    
    Blog: Blog,
    
    BlogPost: BlogPost,
    
    BlogAdmin: BlogAdmin,
    
    BlogEditor: BlogEditor,
    
    InstallationClimatiseur: InstallationClimatiseur,
    
    Sitemap: Sitemap,
    
    SitemapXML: SitemapXML,
    
    ChauffagisteIxelles: ChauffagisteIxelles,
    
    ChauffagisteUccle: ChauffagisteUccle,
    
    ChauffagisteWoluwe: ChauffagisteWoluwe,
    
    CalculateurEconomies: CalculateurEconomies,
    
    DiagnosticChaudiere: DiagnosticChaudiere,
    
    GuideChoixChaudiere: GuideChoixChaudiere,
    
    ChauffagisteSchaerbeek: ChauffagisteSchaerbeek,
    
    ChauffagisteAnderlecht: ChauffagisteAnderlecht,
    
    ChauffagisteEtterbeek: ChauffagisteEtterbeek,
    
    TestimonialsAdmin: TestimonialsAdmin,
    
    ChauffagisteBruxellesVille: ChauffagisteBruxellesVille,
    
    ChauffagisteMolenbeek: ChauffagisteMolenbeek,
    
    ChauffagisteSaintGilles: ChauffagisteSaintGilles,
    
    ChauffagisteJette: ChauffagisteJette,
    
    ChauffagisteKoekelberg: ChauffagisteKoekelberg,
    
    Service: Service,
    
    ServicesAdmin: ServicesAdmin,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/InstallationChaudiere" element={<InstallationChaudiere />} />
                
                <Route path="/DepannageRapide" element={<DepannageRapide />} />
                
                <Route path="/EntretienChaudiere" element={<EntretienChaudiere />} />
                
                <Route path="/DetectionFuiteGaz" element={<DetectionFuiteGaz />} />
                
                <Route path="/APropos" element={<APropos />} />
                
                <Route path="/Contact" element={<Contact />} />
                
                <Route path="/ZonesIntervention" element={<ZonesIntervention />} />
                
                <Route path="/Blog" element={<Blog />} />
                
                <Route path="/BlogPost" element={<BlogPost />} />
                
                <Route path="/BlogAdmin" element={<BlogAdmin />} />
                
                <Route path="/BlogEditor" element={<BlogEditor />} />
                
                <Route path="/InstallationClimatiseur" element={<InstallationClimatiseur />} />
                
                <Route path="/Sitemap" element={<Sitemap />} />
                
                <Route path="/SitemapXML" element={<SitemapXML />} />
                
                <Route path="/ChauffagisteIxelles" element={<ChauffagisteIxelles />} />
                
                <Route path="/ChauffagisteUccle" element={<ChauffagisteUccle />} />
                
                <Route path="/ChauffagisteWoluwe" element={<ChauffagisteWoluwe />} />
                
                <Route path="/CalculateurEconomies" element={<CalculateurEconomies />} />
                
                <Route path="/DiagnosticChaudiere" element={<DiagnosticChaudiere />} />
                
                <Route path="/GuideChoixChaudiere" element={<GuideChoixChaudiere />} />
                
                <Route path="/ChauffagisteSchaerbeek" element={<ChauffagisteSchaerbeek />} />
                
                <Route path="/ChauffagisteAnderlecht" element={<ChauffagisteAnderlecht />} />
                
                <Route path="/ChauffagisteEtterbeek" element={<ChauffagisteEtterbeek />} />
                
                <Route path="/TestimonialsAdmin" element={<TestimonialsAdmin />} />
                
                <Route path="/ChauffagisteBruxellesVille" element={<ChauffagisteBruxellesVille />} />
                
                <Route path="/ChauffagisteMolenbeek" element={<ChauffagisteMolenbeek />} />
                
                <Route path="/ChauffagisteSaintGilles" element={<ChauffagisteSaintGilles />} />
                
                <Route path="/ChauffagisteJette" element={<ChauffagisteJette />} />
                
                <Route path="/ChauffagisteKoekelberg" element={<ChauffagisteKoekelberg />} />
                
                <Route path="/Service" element={<Service />} />
                
                <Route path="/ServicesAdmin" element={<ServicesAdmin />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}