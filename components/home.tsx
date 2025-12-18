import { Timeline } from "@/components/timeline"

export function Home() {
  return (
    <div className="space-y-12">
      {/* Introduction Section */}
      <section className="relative overflow-hidden rounded-3xl bg-[#1a1a1a] py-20 px-6 text-center shadow-2xl">
  {/* Background Trống Đồng - Giữ nguyên màu vàng nhưng làm tối nhẹ để nổi bật chữ */}
  <div
    className="absolute inset-0 pointer-events-none opacity-60"
    style={{
      backgroundImage: `
        linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.7), 
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.7)
        ),
        url('/image-back.jpg')
      `,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  />

  <div className="relative z-10 mx-auto max-w-3xl">
    <span className="mb-4 inline-block rounded-full bg-yellow-500/20 border border-yellow-500/50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-yellow-500">
      Tiến trình lịch sử
    </span>
    
    <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl uppercase">
      Lịch sử Việt Nam <br />
      <span className="text-yellow-500 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
        từ Đại hội VIII đến nay
      </span>
    </h1>

    <div className="mx-auto mb-8 h-1.5 w-32 bg-yellow-600 rounded-full shadow-lg"></div>

    <p className="text-lg leading-relaxed text-gray-200 font-medium drop-shadow-md">
      Việt Nam sau khi giành độc lập và thống nhất đất nước bước vào giai đoạn xây dựng và phát triển. 
      Từ Đại hội VIII (1996) đến nay, Đảng Cộng sản Việt Nam đã từng bước đổi mới tư duy lãnh đạo, 
      định hình mô hình phát triển kinh tế – xã hội.
    </p>
  </div>
</section>

      {/* Timeline Section */}
      <section className="mx-auto max-w-7xl">
        <Timeline />
      </section>
    </div>
  )
}
