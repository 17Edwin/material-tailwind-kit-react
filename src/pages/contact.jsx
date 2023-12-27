import React from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea
} from '@material-tailwind/react'
import { UsersIcon } from '@heroicons/react/24/solid'
import { PageTitle, Footer } from '@/widgets/layout'
import { FeatureCard, TeamCard } from '@/widgets/cards'
import { featuresData, teamData, contactData } from '@/data'

export function Contact() {
    return (
    <>
    <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
    </section>
    <section className="relative bg-blue-gray-50/50 px-4 py-16">
    <div className="container mx-auto">
          <div className="relative -mt-64 mb-6 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
            <div className="relative flex h-screen content-center items-center justify-center pb-32 pt-16">
          <div className="max-w-8xl container relative mx-auto">
            <PageTitle heading="Liên lạc với chúng tôi?">
              Chúng tôi sẽ phản hồi trong vòng 24 giờ.
            </PageTitle>
            <form className="mx-auto mt-12 max-w-3xl text-center">
              <div className="mb-8 flex gap-8">
                <Input variant="standard" size="lg" label="Họ và tên" />
                <Input variant="standard" size="lg" label="Địa chỉ email" />
                <Input variant="standard" size="lg" label="Số điện thoại" />
              </div>
              <Textarea variant="standard" size="lg" label="Message" rows={8} />
              <Button variant="gradient" size="lg" className="mt-8">
                Gửi
              </Button>
            </form>
          </div>
        </div>
                </div>
                </div>
                </div>
        
    </section></>
    
        
    )
  }

export default Contact