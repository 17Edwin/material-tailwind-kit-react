import { Avatar, Typography, Button } from '@material-tailwind/react'
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon
} from '@heroicons/react/24/solid'
import { Footer } from '@/widgets/layout'

export function Profile() {
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
              <div className="flex flex-wrap justify-center">
                <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                  <div className="relative">
                    <div className="-mt-20 w-40">
                      <Avatar
                        src="/img/block.jpg"
                        alt="Profile picture"
                        variant="circular"
                        className="h-full w-full shadow-xl"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex w-full justify-center px-4 lg:order-3 lg:mt-0 lg:w-4/12 lg:justify-end lg:self-center">
                  <Button className="bg-blue-400">Liên hệ</Button>
                </div>
                <div className="w-full px-4 lg:order-1 lg:w-4/12">
                  <div className="flex justify-center py-4 pt-8 lg:pt-4">
                    <div className="mr-4 p-3 text-center">
                      <Typography
                        variant="lead"
                        color="blue-gray"
                        className="font-bold uppercase"
                      >
                        22
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        Friends
                      </Typography>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <Typography
                        variant="lead"
                        color="blue-gray"
                        className="font-bold uppercase"
                      >
                        10
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        Photos
                      </Typography>
                    </div>
                    <div className="p-3 text-center lg:mr-4">
                      <Typography
                        variant="lead"
                        color="blue-gray"
                        className="font-bold uppercase"
                      >
                        89
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        Comments
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-8 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                  Công ty TNHH SẢN XUẤT XÂY DỰNG VẠN KIM{' '}
                </Typography>
                <div className="mb-16 flex items-center justify-center gap-2">
                  <MapPinIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    256/50 M , Tổ 20, Ấp 2, Xã Đông Thạnh, Huyện Hóc Môn, TP HCM{' '}
                  </Typography>
                </div>
                <div className="mb-2 flex items-center justify-center gap-2">
                  <BriefcaseIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    Chuyên sản xuất và cung cấp gạch Terrazzo, gạch con sâu,
                    gạch chữ nhật, gạch chữ I, gạch lục giác, gạch khóa, gạch
                    trồng cỏ, gạch không nung, gạch Tuynel...{' '}
                  </Typography>
                </div>
                {/* <div className="mb-2 flex items-center justify-center gap-2">
                  <BuildingLibraryIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    University of Computer Science
                  </Typography>
                </div> */}
              </div>

              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <Typography
                      className="mb-8 font-normal text-blue-gray-500"
                    >
                      Mục tiêu chiến lược: Vạn Kim là trở thành một nhà tiên
                      phong trong nghành cung cấp vật liệu xây dựng và kinh
                      doanh mở rộng mạnh mẽ thị trường quốc tế, phát triển cùng
                      sự thành công ổn định của khách hàng.
                    </Typography>
                    <Typography
                      className="mb-8 font-normal text-blue-gray-500"
                    >
                      Phương châm hoạt động: Sự thành công của khách hàng là mục
                      tiêu của chúng tôi để phát triển cải thiện ʺ, chúng tôi
                      tin rằng Vạn Kim sẽ là đối tác uy tín và đáng tin cậy cho
                      tất cả các công ty trong nước và quốc tế trong lĩnh vực
                      vật liệu xây dựng.
                    </Typography>
                    <Typography className="mb-8 font-normal text-blue-gray-500">
                      Chất lượng: Vạn Kim với tiêu chí Bán hàng chất lượng- giá
                      cả cạnh tranh- dịch vụ hoàn hảo chúng tôi tin rằng , khi
                      đến với Vạn Kim, qúy khách sẽ hoàn toàn hài lòng về chất
                      lượng sản phẩm và phong cách phục vụ của chúng tôi.
                    </Typography>
                    <Typography className="mb-8 font-normal text-blue-gray-500">
                      Trách nhiệm: Đối với Vạn Kim là niềm tin là chiến lược.
                      chúng tôi làm cung cấp sản phẩm ngoài chất lượng thì phải
                      có trách nhiệm trong sản phẩm đã cung cấp để đem lại uy
                      tín và thương hiệu cho Công Ty. Trách nhiệm không nằm
                      trong sản phẩm mà nằm trong đạo đức nguồn nhân lực của
                      Công Ty nên sản phẩm của Công Ty cung cấp là 1 tâm huyết
                      của Công Ty Vạn Kim nói riêng toàn xã hội nói chung.
                    </Typography>
                    <Typography className="mb-8 font-normal text-blue-gray-500">
                      Dịch Vụ Khách hàng: Vạn Kim luôn lắng nghe sự phản hồi từ
                      khách hàng, đồng thời khắc phục những sai sót và nâng cao
                      chất lượng sản phẩm một cách nhanh chóng và hiệu quả nhất.
                    </Typography>
                    <Button variant="text">Show more</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  )
}

export default Profile
