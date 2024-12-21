import "@/node_modules/react-modal-video/css/modal-video.css"
import "public/assets/css/style.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { dmSans } from '@/lib/font'
export const metadata = {
    title: 'Logistiq',
    description: 'Transport& logistic react next Js template',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${dmSans.variable}`}>
            <body>{children}</body>
        </html>
    )
}
