import { environment } from 'src/environments/environment';

export const Constants = {
    MESSAGE_KEY: 'GG:MESSAGE:GG',
    MESSAGE_DEFAULT: 'Hola, he visto tu web y quiero hablar contigo.',
    WHATSAPP_BASE: `https://api.whatsapp.com/send?phone=${environment.whatsappNumber}`,
    EMAIL_BASE: `mailto:${environment.contactEmail}?subject=Contacto por web&`,
    MESSAGE_CONNECTOR: '&text=',
    WHATSAPP_LABEL: 'whatsapp',
    EMAIL_LABEL: 'email',
};
