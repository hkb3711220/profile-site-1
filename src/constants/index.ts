import pexels1 from '../assets/pexels1.jpg'
import pexels2 from '../assets/pexels2.jpg'
import pexels3 from '../assets/pexels3.jpg'
import {MdOutlineMail, MdSmartphone} from 'react-icons/md'
import { ImAddressBook } from 'react-icons/im'


export const navLinks = [
    {id: "about", title: "About",},
    {id: "work", title: "Work",},
    {id: "contact", title: "Contact"},
]

export const aboutMeList = [
    {title: "Experience", subTitle: "7 years+"},
    {title: "Projects", subTitle: "20+"},
    {title: "Clients", subTitle: "Bank, Insurance"},
    {title: "Skills", subTitle: "Azure, AWS, GCP and so on"}
]

export const workList = [
    {
        title: "IT Infrastructure Design",
        tech: ["AWS", "GCP", "GCP", "kubernetes", "Openshift"],
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, debitis officia aliquam alias exercitationem neque at ab non consequatur sunt amet quae expedita nulla laudantium quas! Quisquam fugiat corporis in.",
        image: pexels1,
    },
    {
        title: "CI/CD Pipeline Design",
        tech: ["Jenkins", "Code Pipeline", "Tekton", "ArgoCD"],
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, debitis officia aliquam alias exercitationem neque at ab non consequatur sunt amet quae expedita nulla laudantium quas! Quisquam fugiat corporis in.",
        image: pexels2,
    },
    {
        title: "Data Analytics Infrastructure Design",
        tech: ["BigQuery", "Azure Data Factory"],
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, debitis officia aliquam alias exercitationem neque at ab non consequatur sunt amet quae expedita nulla laudantium quas! Quisquam fugiat corporis in.",
        image: pexels3
    }

]

export const contact = [
    {
        info: 'xxx-xxxx-xxxx',
        icon: MdSmartphone
    },
    {
        info: 'Mrs Smith 71 Cherry Court Southampton SO53 5PD',
        icon: ImAddressBook
    },
    {
        info: 'xxxxx@gmail.com',
        icon: MdOutlineMail
    },

]
