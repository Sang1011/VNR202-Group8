"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Flag, TrendingUp, Globe, Building2, FileText, Rocket } from "lucide-react"
import { cn } from "@/lib/utils"
import { XCircle, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
const timelineData = [
  {
    id: 1,
    year: "1996 - 2000",
    title: "Đại hội VIII (1996)",
    color: "bg-cyan-500",
    borderColor: "border-cyan-500",
    textColor: "text-cyan-600",
    icon: Flag,
    image: './back8.jpg',
    summary: "Đẩy mạnh công nghiệp hóa – hiện đại hóa, thừa nhận kinh tế nhiều thành phần",
    content: {
      image: "./daihoi8.png",
      background: {
        domestic: [
          "Đã thoát khỏi khủng hoảng kinh tế – xã hội, đạt thành tựu quan trọng.",
          "Kinh tế: Ổn định và tăng trưởng, phát triển đa dạng thành phần kinh tế, mở cửa hội nhập quốc tế.",
          "Xã hội: Cải thiện đời sống nhân dân, ổn định chính trị - xã hội",
        ],
        international: [
          "Sự phát triển mạnh mẽ của Cách mạng khoa học – công nghệ (đặc biệt là công nghệ thông tin) tạo ra cơ hội và thách thức lớn.",
          "CNXH hiện thực thoái trào (Liên Xô và Đông Âu tan rã) → đòi hỏi Đảng phải kiên định con đường và đẩy mạnh đổi mới.",
        ],
      },
      oldPolicies: [
        "Bao cấp trực tiếp cho doanh nghiệp",
        "Quản lý kinh tế bằng mệnh lệnh hành chính",
        "Coi kinh tế nhà nước là gần như duy nhất",
      ],
      newPolicies: [
        "Đẩy mạnh công nghiệp hóa – hiện đại hóa",
        "Thừa nhận kinh tế nhiều thành phần",
        "Mở cửa thu hút đầu tư nước ngoài",
      ],
      targetsAndMissions: [
        "Mục tiêu: Đưa nước ta cơ bản trở thành nước công nghiệp theo hướng hiện đại vào năm 2020.",
        "Tiếp tục sự nghiệp Đổi mới, phát triển kinh tế nhanh, hiệu quả, bền vững.",
        "Xây dựng Đảng và hệ thống chính trị vững mạnh."
      ],
      events: [
        "1995: Việt Nam chính thức gia nhập ASEAN – bước ngoặt hội nhập quốc tế.",
        "12/1996 (TW 2 khóa VIII): Ban hành Nghị quyết về GD-ĐT, KH-CN là quốc sách hàng đầu.",
        "6/1997 (TW 3 khóa VIII): Ban hành Nghị quyết về Xây dựng Nhà nước pháp quyền XHCN và cải cách hành chính – tư pháp.",
        "1997–1998: Khủng hoảng tài chính châu Á - Việt Nam bị ảnh hưởng nhẹ hơn.",
        "7/1998 (TW 5 khóa VIII): Ban hành Nghị quyết về Văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc.",
        "12/1997 (TW 4 khóa VIII) & 2/1999 (TW 6 lần 2 khóa VIII): Điều chỉnh nhân sự cấp cao (Lê Khả Phiêu làm TBT), tập trung Chỉnh đốn Đảng, chống tham nhũng, quan liêu.",
        "8/1999 (TW 7 khóa VIII): Quyết định Sắp xếp tổ chức bộ máy, đổi mới phương thức hoạt động hệ thống chính trị.",
      ],
    },
    contentNext: {
      image: "./daihoi8.png", // Giữ lại ảnh nếu cần
      mainTheme: "Tiếp tục sự nghiệp đổi mới, đẩy mạnh công nghiệp hóa, hiện đại hóa vì mục tiêu dân giàu, nước mạnh, xã hội công bằng, văn minh, vững bước đi lên CNXH.",
      keyContent: [
        "Đánh giá thành tựu to lớn của 10 năm đổi mới (1986-1996), chỉ ra những yếu kém.",
        "Mục tiêu & Nhiệm vụ: Đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước theo định hướng XHCN.",
      ],
      majorLessons: [
        "Giữ vững mục tiêu độc lập dân tộc và CNXH.",
        "Kết hợp chặt chẽ đổi mới kinh tế với đổi mới chính trị.",
        "Xây dựng nền kinh tế hàng hóa nhiều thành phần.",
        "Mở rộng khối đại đoàn kết toàn dân và hợp tác quốc tế.",
        "Tăng cường vai trò lãnh đạo của Đảng.",
      ],
      // Trường mới chứa thông tin chi tiết sau Đại hội
      postCongressResolutions: {
        industrializationViews: [
          "Quan điểm: Độc lập tự chủ & Hợp tác quốc tế.",
          "Là sự nghiệp của toàn dân; lấy phát huy nguồn lực con người là yếu tố cơ bản.",
          "Khoa học và công nghệ là động lực then chốt; lấy hiệu quả kinh tế làm chuẩn cơ bản.",
        ],
        partyBuilding: [
          "Nội dung: Tự đổi mới, tự chỉnh đốn Đảng, giữ vững bản chất giai cấp công nhân.",
          "Mục tiêu: Nâng cao bản lĩnh chính trị, phẩm chất, năng lực của cán bộ, đảng viên.",
          "NQ 10-NQ/TW (TW6 lần 2 - 2/1999): Kiên quyết đấu tranh đẩy lùi 4 nguy cơ (tham nhũng, quan liêu; tụt hậu kinh tế; chệch hướng XHCN; 'diễn biến hòa bình').",
        ],
        stateAndSystemBuilding: {
          meeting: "Trung ương 3 khóa VIII (6/1997) với Nghị quyết 03-NQ/HNTW.",
          focus: [
            "Phát huy quyền làm chủ của nhân dân (dân chủ đại diện và trực tiếp).",
            "Xây dựng Nhà nước CHXHCN trong sạch, vững mạnh, hoạt động hiệu lực, hiệu quả.",
            "Nhiệm vụ: Mở rộng dân chủ, kiện toàn Quốc hội, đẩy mạnh cải cách hành chính và cải cách tư pháp; hoàn thiện Nhà nước pháp quyền XHCN.",
          ],
        },
        socialAndCulturalDevelopment: {
          educationAndScience: {
            meeting: "Trung ương 2 khóa VIII (12/1996) với Nghị quyết 02-NQ/HNTW.",
            focus: [
              "Giáo dục – đào tạo và khoa học – công nghệ là quốc sách hàng đầu.",
              "Xây dựng con người Việt Nam phát triển toàn diện, vừa “hồng” vừa “chuyên”.",
            ],
          },
          culture: {
            meeting: "Trung ương 5 khóa VIII (7/1998).",
            focus: [
              "Xây dựng và phát triển nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc.",
              "Văn hóa là nền tảng tinh thần của xã hội, vừa là mục tiêu vừa là động lực của phát triển.",
              "10 nhiệm vụ lớn (Xây dựng con người, bảo tồn di sản, gắn với giáo dục, chống 'diễn biến hòa bình',...).",
            ],
          },
        },
      },
    }
  },
  {
    id: 2,
    year: "2001 - 2005",
    title: "Đại hội IX (2001)",
    color: "bg-amber-500",
    borderColor: "border-amber-500",
    textColor: "text-amber-600",
    icon: TrendingUp,
    summary: "Khẳng định Tư tưởng Hồ Chí Minh là nền tảng tư tưởng, đẩy mạnh CNH, HĐH và hội nhập quốc tế.",
    image: './back9.webp',
    content: {
      image: "./daihoi9.png",
      background: {
        domestic: [
          "Sau 15 năm Đổi mới (1986–2001), Việt Nam đạt nhiều thành tựu, tạo thế và lực mới.",
          "Kinh tế phát triển chưa vững chắc, hiệu quả và sức cạnh tranh còn thấp.",
          "Các nguy cơ (tụt hậu, chệch hướng, tham nhũng, quan liêu, 'diễn biến hòa bình') vẫn tồn tại gay gắt.",
          "Mục tiêu tăng trưởng GDP 1996–2000 (9–10%) không đạt.",
        ],
        international: [
          "Cách mạng KH-CN, kinh tế tri thức và toàn cầu hóa phát triển mạnh mẽ.",
          "Hòa bình, hợp tác là xu thế chủ đạo; xung đột cục bộ, khủng bố (sau 11/9/2001) vẫn phức tạp.",
          "CNXH hiện thực thoái trào, đòi hỏi Việt Nam kiên định mục tiêu và đẩy mạnh đổi mới.",
        ],
      },
      oldPolicies: [
        'Tư duy "mở cửa có kiểm soát quá chặt"',
        "Phân biệt đối xử doanh nghiệp nhà nước – tư nhân",
      ],
      newPolicies: [
        "Khẳng định Tư tưởng Hồ Chí Minh là nền tảng tư tưởng, kim chỉ nam cho hành động.",
        "Xác định mô hình: Kinh tế thị trường định hướng xã hội chủ nghĩa.",
        "Chủ động hội nhập kinh tế quốc tế.",
      ],
      targetsAndMissions: [
        "Chiến lược 2001–2010: Đưa Việt Nam ra khỏi tình trạng kém phát triển.",
        "Tạo nền tảng để đến năm 2020 cơ bản trở thành nước công nghiệp.",
        "Mục tiêu cụ thể: GDP năm 2010 gấp đôi năm 2000.",
      ],
      events: [
        "4/2001: Đại hội Đảng lần thứ IX (Đồng chí Nông Đức Mạnh được bầu làm Tổng Bí thư).",
        "12/2001 (NQ 05-NQ/TW): Đổi mới, sắp xếp, nâng cao hiệu quả Doanh nghiệp Nhà nước.",
        "3/2003 (Chỉ thị 23-CT/TW): Đẩy mạnh nghiên cứu, tuyên truyền, giáo dục Tư tưởng Hồ Chí Minh.",
        "3/2003 (NQ 24, 25-NQ/TW): Về công tác dân tộc và tôn giáo (Chiến lược lâu dài, tôn trọng tự do tín ngưỡng).",
        "3/2004 (NQ 36-NQ/TW): Khẳng định Người Việt Nam ở nước ngoài là bộ phận không tách rời của cộng đồng dân tộc.",
      ],
    },
    contentNext: {
      mainTheme: "Tiếp tục thực hiện công nghiệp hóa, hiện đại hóa đất nước.",
      keyContent: [
        "Khẳng định Chủ nghĩa Mác – Lênin và Tư tưởng Hồ Chí Minh là nền tảng tư tưởng, kim chỉ nam cho hành động.",
        "Mô hình kinh tế: Kinh tế thị trường định hướng xã hội chủ nghĩa.",
        "Nâng tầm đối ngoại: Từ 'muốn là bạn' lên 'là đối tác tin cậy' của cộng đồng quốc tế.",
      ],
      ideologicalFoundation: {
        hoChiMinhThought: [
          "Lần đầu xác định rõ nội dung cơ bản của Tư tưởng Hồ Chí Minh.",
          "Là sự vận dụng và phát triển sáng tạo Chủ nghĩa Mác – Lênin vào điều kiện Việt Nam.",
        ],
        socialismTransition: [
          "Kiên định con đường XHCN, bỏ qua chế độ TBCN nhưng tiếp thu thành tựu KH-CN.",
          "Động lực chủ yếu là đại đoàn kết toàn dân, nòng cốt là liên minh công – nông – trí thức.",
        ],
        economicModel: [
          "Mô hình: Kinh tế thị trường định hướng xã hội chủ nghĩa.",
          "Nền kinh tế nhiều thành phần, vận hành theo cơ chế thị trường có sự quản lý của Nhà nước.",
        ],
      },
      socialAndCulturalDevelopment: {
        cultureAndPeople: [
          "Văn hóa: Là nền tảng tinh thần, mục tiêu và động lực của phát triển, gắn với kinh tế thị trường định hướng XHCN.",
          "Con người: Xây dựng con người Việt Nam phát triển toàn diện (trí tuệ, đạo đức, sáng tạo).",
        ],
        nationalUnity: [
          "Đại đoàn kết toàn dân là động lực chủ yếu, mục tiêu: dân giàu, nước mạnh, xã hội công bằng, dân chủ, văn minh.",
          "Quan hệ giai cấp là hợp tác và đấu tranh trong nội bộ nhân dân.",
        ],
        specificGroups: [
          "Dân tộc: Chiến lược lâu dài, các dân tộc bình đẳng, đoàn kết, cùng phát triển (NQ 24-NQ/TW).",
          "Tôn giáo: Tôn trọng quyền tự do tín ngưỡng, nghiêm cấm lợi dụng tôn giáo (NQ 25-NQ/TW).",
          "Người Việt Nam ở nước ngoài: Là bộ phận không tách rời, nguồn lực quan trọng (NQ 36-NQ/TW).",
        ],
      },
      foreignPolicy: [
        "Thực hiện nhất quán đường lối đối ngoại độc lập, tự chủ, đa phương hóa, đa dạng hóa quan hệ quốc tế.",
        "Chủ động hội nhập kinh tế quốc tế, coi hội nhập là nhiệm vụ quan trọng.",
        "Vị thế quốc tế: Sẵn sàng là bạn, là **đối tác tin cậy** của cộng đồng quốc tế.",
      ],
      // Bổ sung mục chi tiết về Chiến lược Bảo vệ Tổ quốc
      nationalDefenseStrategy: {
          aims: [
              "Bảo vệ độc lập, chủ quyền, toàn vẹn lãnh thổ.",
              "Bảo vệ Đảng, Nhà nước, nhân dân và chế độ XHCN, bảo vệ sự nghiệp đổi mới.",
              "Giữ vững an ninh, trật tự và môi trường hòa bình để phát triển.",
          ],
          directingViews: [
              "Đảng giữ vai trò lãnh đạo tuyệt đối.",
              "Kiên định độc lập dân tộc gắn với CNXH.",
              "Kết hợp chặt chẽ xây dựng và bảo vệ Tổ quốc.",
              "Xây dựng sức mạnh tổng hợp, chủ động phòng ngừa, ngăn chặn nguy cơ từ sớm.",
          ],
          basicTasks: [
              "Giữ vững hòa bình, ổn định để phát triển đất nước.",
              "Xây dựng và bảo vệ Đảng là nhiệm vụ then chốt.",
              "Tăng cường quốc phòng – an ninh, quân đội & công an nòng cốt.",
              "Đẩy mạnh đối ngoại, hợp tác quốc tế.",
          ]
      },
      postCongressResolutions: {
          economyAndLand: [
              "NQ 05-NQ/TW (9/2001): Sắp xếp, đổi mới, nâng cao hiệu quả Doanh nghiệp Nhà nước.",
              "TW 5 (3/2002): Khẳng định kinh tế tư nhân là bộ phận quan trọng.",
              "Đất đai: Thuộc sở hữu toàn dân, Nhà nước quản lý thống nhất.",
          ],
          partyBuilding: [
              "Chỉ thị 23-CT/TW (3/2003): Đẩy mạnh nghiên cứu, tuyên truyền, giáo dục Tư tưởng Hồ Chí Minh.",
              "Cán bộ: Xây dựng đội ngũ yêu nước, liêm chính, có năng lực.",
          ],
      },
    },
  },
  {
    id: 3,
    year: "2006 - 2010",
    title: "Đại hội X (2006)",
    color: "bg-rose-500",
    borderColor: "border-rose-500",
    textColor: "text-rose-600",
    icon: Globe,
    summary: "Việt Nam gia nhập WTO (2007), cải cách hành chính, phòng chống tham nhũng",
    image: './back10.webp',
    content: {
      image: "./daihoi10.png",
      background: {
        domestic: ["Chính sách cũ không đủ minh bạch", "Tham nhũng, bộ máy cồng kềnh lộ rõ"],
        international: [
          "2007: Việt Nam gia nhập WTO - mốc quan trọng",
          "Thị trường rộng mở, thu hút đầu tư mạnh",
          "Doanh nghiệp yếu bị đào thải, cạnh tranh gay gắt",
        ],
      },
      oldPolicies: ["Chính sách cũ không đủ minh bạch", "Bộ máy cồng kềnh"],
      newPolicies: ["Cải cách hành chính", "Phòng chống tham nhũng", "Nâng cao hiệu quả quản lý nhà nước"],
      // Đã chuyển đổi thành mảng
      targetsAndMissions: [
        "Mục tiêu: Sớm đưa Việt Nam ra khỏi tình trạng kém phát triển.",
        "Phấn đấu đến năm 2010 là nước có thu nhập trung bình thấp.",
        "Đẩy mạnh toàn diện công cuộc đổi mới, phát triển nhanh và bền vững."
      ],
      events: [
        "2007: Việt Nam chính thức gia nhập WTO - mở ra cơ hội và thách thức mới",
      ],
    },
  },
  {
    id: 4,
    year: "2011 - 2015",
    title: "Đại hội XI (2011)",
    color: "bg-slate-700",
    borderColor: "border-slate-700",
    textColor: "text-slate-700",
    image: './back11.webp',
    icon: Building2,
    summary: "Tái cơ cấu nền kinh tế: ngân hàng, doanh nghiệp nhà nước, đầu tư công",
    content: {
      image: "./daihoi11.png",
      background: {
        domestic: ["Tăng trưởng nóng → lạm phát", "Nợ xấu ngân hàng", "Đầu tư công dàn trải"],
        international: ["Khủng hoảng kinh tế toàn cầu 2008 để lại hậu quả nặng"],
      },
      oldPolicies: ["Mô hình tăng trưởng dựa vào đầu tư công dàn trải", "Quản lý ngân hàng lỏng lẻo"],
      newPolicies: ["Tái cơ cấu ngân hàng", "Tái cơ cấu doanh nghiệp nhà nước", "Tái cơ cấu đầu tư công"],
      targetsAndMissions: [
        "Mục tiêu: Đưa nước ta trở thành nước công nghiệp theo hướng hiện đại vào năm 2020.",
        "Ổn định kinh tế vĩ mô, kiềm chế lạm phát, tái cơ cấu nền kinh tế."
      ],
      events: [
        "Hậu quả khủng hoảng 2008 buộc Việt Nam phải tái cơ cấu toàn diện nền kinh tế",
      ],
    },
  },
  {
    id: 5,
    year: "2016 - 2020",
    title: "Đại hội XII (2016)",
    color: "bg-orange-500",
    borderColor: "border-orange-500",
    textColor: "text-orange-600",
    icon: FileText,
    summary: "Đẩy mạnh toàn diện, đồng bộ công cuộc đổi mới; chỉnh đốn Đảng, cải cách thể chế, ứng phó Covid-19",
    image: './back12.webp',
    content: {
      image: "./daihoi12.png",
      background: {
        domestic: [
          "Kinh tế tăng trưởng nhưng chất lượng chưa cao, nảy sinh nợ xấu/nợ công.",
          "Cải cách bộ máy, phòng chống tham nhũng trở thành vấn đề cấp bách.",
          "Việt Nam đã 30 năm Đổi mới, cần định hướng phát triển bền vững hơn.",
        ],
        international: [
          "Thế giới diễn biến nhanh, phức tạp, khó lường.",
          "Cạnh tranh kinh tế, an ninh, tranh chấp ngày càng gay gắt.",
        ],
      },
      oldPolicies: [
        "Mô hình tăng trưởng chậm đổi mới, còn dựa vào vốn và lao động.",
        "Thể chế chưa đồng bộ, còn lợi ích cục bộ.",
        "Doanh nghiệp nhà nước hiệu quả thấp, nợ nần lớn.",
      ],
      newPolicies: [
        "Xây dựng, chỉnh đốn Đảng, ngăn chặn suy thoái, 'tự diễn biến, tự chuyển hóa'.",
        "Đổi mới mô hình tăng trưởng, cơ cấu lại nền kinh tế (3 đột phá chiến lược).",
        "Hoàn thiện thể chế kinh tế thị trường định hướng XHCN.",
        "Chủ động hội nhập quốc tế nhưng giữ vững độc lập, tự chủ.",
        "Tinh gọn bộ máy, chống tham nhũng, lãng phí.",
      ],
      targetsAndMissions: [
        "Mục tiêu: Đẩy mạnh toàn diện, đồng bộ công cuộc đổi mới.",
        "Nâng cao chất lượng tăng trưởng, phát triển nhanh và bền vững.",
        "Thực hiện 6 nhiệm vụ trọng tâm (Chỉnh đốn Đảng, Tinh gọn bộ máy, Cơ cấu lại kinh tế, Hội nhập, An sinh xã hội, Phát huy nhân tố con người)."
      ],
      events: [
        "10/2016 – NQ 04-NQ/TW (TW4): Siết kỷ luật, chống suy thoái.",
        "2016–2018: Việt Nam tham gia các FTA thế hệ mới (VD: CPTPP, EVFTA).",
        "10/2018 – NQ 36: Phát triển kinh tế biển gắn chủ quyền.",
        "2020: Đại dịch Covid-19 bùng phát, Việt Nam ứng phó thành công.",
      ],
    },
  },
  {
    id: 6,
    year: "2021 - Nay",
    title: "Đại hội XIII (2021)",
    color: "bg-emerald-500",
    borderColor: "border-emerald-500",
    textColor: "text-emerald-600",
    icon: Rocket,
    summary: "Xác định tầm nhìn 2030-2045, thúc đẩy chuyển đổi số, phát triển bền vững",
    image: './back13.webp',
    content: {
      image: "./daihoi13.png",
      background: {
        domestic: [
          "Đã có nền tảng vững chắc sau 35 năm Đổi mới.",
          "Cần định hình tư duy phát triển dài hạn.",
          "Nảy sinh các vấn đề chiến lược mới: phát triển bền vững, chuyển đổi số, an ninh phi truyền thống.",
        ],
        international: [
          "Hậu Covid-19, kinh tế thế giới phục hồi nhưng rủi ro cao.",
          "Biến đổi khí hậu trở thành vấn đề toàn cầu.",
          "Cách mạng công nghiệp 4.0 tác động mạnh mẽ.",
        ],
      },
      oldPolicies: ["Cần chuyển đổi từ mô hình tăng trưởng truyền thống sang kinh tế số/kinh tế xanh."],
      newPolicies: [
        "Xác định tầm nhìn phát triển đến 2030 (100 năm thành lập Đảng) và 2045 (100 năm thành lập nước).",
        "Thực hiện 3 đột phá chiến lược (Thể chế, Nhân lực, Hạ tầng) để nâng cao năng suất.",
        "Đẩy mạnh chuyển đổi xanh, ứng phó biến đổi khí hậu.",
        "Phát triển kinh tế số, xã hội số.",
      ],
      targetsAndMissions: [
        "Mục tiêu: Trở thành nước đang phát triển, có công nghiệp hiện đại, thu nhập trung bình cao vào năm 2030.",
        "Trở thành nước phát triển, thu nhập cao vào năm 2045.",
        "Tiếp tục đẩy mạnh toàn diện, đồng bộ công cuộc đổi mới."
      ],
      events: [
        "2021-2022: Việt Nam tập trung kiểm soát dịch và phục hồi kinh tế hậu Covid-19.",
        "Tiếp tục hội nhập quốc tế sâu rộng, tăng cạnh tranh và đòi hỏi năng lực nội sinh mạnh hơn.",
        "Đẩy mạnh cuộc chiến chống tham nhũng, tiêu cực.",
      ],
    },
  },
]

export function Timeline() {
  const [selectedItem, setSelectedItem] = useState<typeof timelineData[number] | null>(null)
  const [showDetailedContent, setShowDetailedContent] = useState(false);
  return (
    <div className="relative mx-auto max-w-7xl px-4">
      {/* Start Label */}
      <div className="mb-8 flex justify-center">
        <div className="rounded-lg border-2 border-primary bg-background px-6 py-2 font-bold text-primary shadow-md">
          BẮT ĐẦU
        </div>
      </div>

      {/* Timeline Line */}
      <div className="absolute left-1/2 top-20 bottom-20 w-1 -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-amber-500 to-emerald-500" />

      {/* Timeline Items */}
      <div className="relative space-y-12">
        {timelineData.map((item, index) => {
          const isLeft = index % 2 === 0
          const Icon = item.icon

          return (
            <div key={item.id} className="relative">
              {/* Center Circle */}
              <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2">
                <div
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-full border-4 bg-background",
                    item.borderColor,
                  )}
                >
                  <Icon className={cn("h-5 w-5", item.textColor)} />
                </div>
              </div>

              {/* Content Card */}
              <div className={cn("relative w-[calc(50%-3rem)]", isLeft ? "mr-auto pr-4" : "ml-auto pl-4")}>
                {/* Dotted Line */}
                <div
                  className={cn(
                    "absolute top-6 h-0.5 w-8 border-t-2 border-dashed border-muted-foreground/50",
                    isLeft ? "right-0" : "left-0",
                  )}
                />

                <div
                  className={cn(
                    "cursor-pointer rounded-xl border bg-card p-5 shadow-lg transition-all hover:shadow-xl",
                  )}
                  onClick={() => {
                    setSelectedItem(item)}}
                >
                  {/* Year Badge */}
                  <div
                    className={cn("mb-3 inline-block rounded-full px-4 py-1 text-sm font-bold text-white", item.color)}
                  >
                    {item.year}
                  </div>

                  <div>
                    <img src={item.image} alt={item.title} className="mb-4 h-40 w-full rounded-lg object-cover" />
                  </div>

                  {/* Title */}
                  <h3 className={cn("mb-2 text-lg font-bold", item.textColor)}>{item.title}</h3>

                  {/* Summary */}
                  <p className="mb-3 text-sm text-muted-foreground">{item.summary}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {selectedItem && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
    <div className="relative grid max-h-[100100vh] w-full max-w-6xl grid-cols-1 overflow-hidden rounded-xl bg-background shadow-xl md:grid-cols-[400px_1fr]">

      {/* ===== LEFT: IMAGE & NAVIGATION CONTROLS (Giữ nguyên) ===== */}
      <div className="relative hidden md:block">
        <Image
          src={selectedItem.content.image || "/fallback-image.png"}
          alt={selectedItem.title}
          fill
          className="object-contain"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Nút chuyển đổi (dùng Tab Style) đặt ở góc dưới ảnh */}
        {selectedItem.contentNext && (
          <div className="absolute bottom-4 left-4 right-4 flex space-x-2 rounded-lg bg-black/50 p-1 backdrop-blur-sm">
            <button
              onClick={() => setShowDetailedContent(false)}
              className={cn(
                "flex-1 rounded-md px-3 py-2 text-sm font-semibold transition-colors",
                !showDetailedContent
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-white/70 hover:bg-white/10"
              )}
            >
              Thông tin chung
            </button>
            <button
              onClick={() => setShowDetailedContent(true)}
              className={cn(
                "flex-1 rounded-md px-3 py-2 text-sm font-semibold transition-colors",
                showDetailedContent
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-white/70 hover:bg-white/10"
              )}
            >
              Chi tiết Nghị quyết
            </button>
          </div>
        )}
      </div>

      {/* ===== RIGHT: CONTENT (Đã Cập nhật logic hiển thị chi tiết) ===== */}
      <div className="relative max-h-[90vh] overflow-y-auto p-6">
        {/* Close */}
        <button
          className="absolute right-4 top-4 text-muted-foreground hover:text-foreground cursor-pointer text-2xl font-bold"
          onClick={() => {
            setShowDetailedContent(false);
            setSelectedItem(null)}}
        >
          ✕
        </button>

        {/* Header (Hiển thị cố định) */}
        <div className="mb-6">
          <span
            className={cn(
              "inline-block rounded-full px-4 py-1 text-sm font-bold text-white",
              selectedItem.color
            )}
          >
            {selectedItem.year}
          </span>
          <h2 className="mt-2 text-2xl font-bold">{selectedItem.title}</h2>
          <p className="mt-1 text-muted-foreground">{selectedItem.summary}</p>
        </div>

        {/* Logic hiển thị nội dung chính hoặc nội dung chi tiết */}
        <div className="space-y-6">
          {!showDetailedContent ? (
            // --- NỘI DUNG CHÍNH (content) - (Giữ nguyên) ---
            <>
              {/* Bối cảnh */}
              <div className="rounded-xl border bg-muted/30 p-4">
                <h3 className="mb-3 font-bold">Bối cảnh</h3>
                <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr]">
                  {/* ===== CỘT 1: TRONG NƯỚC ===== */}
                  <div>
                    <p className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                      Trong nước
                    </p>
                    <ul className="mt-2 space-y-2 text-sm">
                      {selectedItem.content.background.domestic.map((p, i) => (
                        <li key={i}>• {p}</li>
                      ))}
                    </ul>
                  </div>

                  {/* ===== DIVIDER (NGĂN CÁCH) ===== */}
                  <div className="hidden md:block">
                    <div className="h-full w-px bg-gray-300 dark:bg-gray-700 mx-2" aria-hidden="true" />
                  </div>

                  {/* ===== CỘT 2: QUỐC TẾ ===== */}
                  <div>
                    <p className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                      Quốc tế
                    </p>
                    <ul className="mt-2 space-y-2 text-sm">
                      {selectedItem.content.background.international.map((p, i) => (
                        <li key={i}>• {p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Chuyển đổi chính sách */}
              <div>
                <h2 className="mb-4 text-base font-bold">Chuyển đổi chính sách</h2>
                <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr]">
                  {/* Chính sách cũ */}
                  <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-4">
                    <h3 className="mb-2 font-semibold text-destructive">Chính sách cũ</h3>
                    <ul className="space-y-1 text-sm">
                      {selectedItem.content.oldPolicies.map((p, i) => (
                        <li key={i} className="flex gap-2">
                          {/* Giả sử XCircle là component icon */}
                          <XCircle className="mt-0.5 h-3.5 w-3.5 text-destructive" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:flex items-center justify-center">
                    {/* Giả sử ArrowRight là component icon */}
                    <ArrowRight className="h-8 w-8 text-muted-foreground" />
                  </div>

                  {/* Chính sách mới */}
                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4">
                    <h3 className="mb-2 font-semibold text-emerald-600">Chính sách mới</h3>
                    <ul className="space-y-1 text-sm">
                      {selectedItem.content.newPolicies.map((p, i) => (
                        <li key={i} className="flex gap-2">
                          {/* Giả sử CheckCircle là component icon */}
                          <CheckCircle className="mt-0.5 h-3.5 w-3.5 text-emerald-500" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Mục tiêu & Nhiệm vụ */}
              {selectedItem.content.targetsAndMissions && selectedItem.content.targetsAndMissions.length > 0 && (
                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-4">
                  <h3 className="mb-2 font-bold text-blue-600">Mục tiêu & Nhiệm vụ</h3>
                  <ul className="space-y-1 text-sm list-disc pl-5">
                    {selectedItem.content.targetsAndMissions.map((mission, i) => (
                      <li key={i}>{mission}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Sự kiện */}
              <div>
                <h3 className="mb-2 font-bold">Sự kiện nổi bật</h3>
                <ul className="rounded-lg bg-muted p-3 text-sm list-disc pl-5">
                  {selectedItem.content.events.map((event, index) => (
                    <li key={index} className="mb-1">
                      {event}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            // --- NỘI DUNG CHI TIẾT (contentNext) - CẬP NHẬT CHO ĐẠI HỘI IX ---
            selectedItem.contentNext && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-amber-600 border-b pb-2">Nghị quyết và Chủ trương sau Đại hội IX</h3>
                <p className="text-sm italic text-muted-foreground">
                  Chủ đề: **{selectedItem.contentNext.mainTheme}**
                </p>

                {/* 1. Nền tảng Tư tưởng & Mô hình Kinh tế */}
                <div className="rounded-xl border border-indigo-500/30 bg-indigo-50/50 p-4 space-y-4">
                  <h4 className="font-bold text-indigo-700">Nền tảng Tư tưởng & Mô hình Kinh tế</h4>

                  {/* Tư tưởng Hồ Chí Minh */}
                  {selectedItem.contentNext.ideologicalFoundation?.hoChiMinhThought && (
                    <div className="space-y-1">
                      <p className="font-semibold text-sm">Tư tưởng Hồ Chí Minh:</p>
                      <ul className="space-y-1 text-sm list-disc pl-5">
                        {selectedItem.contentNext.ideologicalFoundation.hoChiMinhThought.map((item, i) => (
                          <li key={`hcm-${i}`}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Mô hình kinh tế */}
                  {selectedItem.contentNext.ideologicalFoundation?.economicModel && (
                    <div className="space-y-1">
                      <p className="font-semibold text-sm">Mô hình Kinh tế:</p>
                      <ul className="space-y-1 text-sm list-disc pl-5">
                        {selectedItem.contentNext.ideologicalFoundation.economicModel.map((item, i) => (
                          <li key={`econ-${i}`}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* 2. Phát triển Văn hóa, Con người & Đại đoàn kết */}
                {selectedItem.contentNext.socialAndCulturalDevelopment && (
                  <div className="rounded-xl border border-pink-500/30 bg-pink-50/50 p-4 space-y-4">
                    <h4 className="font-bold text-pink-700">Văn hóa, Con người & Đại đoàn kết</h4>

                    {/* Văn hóa và Con người */}
                    <div className="space-y-1">
                      <p className="font-semibold text-sm">Văn hóa & Con người:</p>
                      <ul className="space-y-1 text-sm list-disc pl-5">
                        {selectedItem.contentNext.socialAndCulturalDevelopment.cultureAndPeople.map((item, i) => (
                          <li key={`cult-${i}`}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Dân tộc, Tôn giáo, NVNONN */}
                    <div className="space-y-1">
                      <p className="font-semibold text-sm">Công tác Dân tộc, Tôn giáo, Người Việt Nam ở nước ngoài:</p>
                      <ul className="space-y-1 text-sm list-disc pl-5">
                        {selectedItem.contentNext.socialAndCulturalDevelopment.specificGroups.map((item, i) => (
                          <li key={`spec-${i}`}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                
                {/* 3. Đường lối Đối ngoại và Hội nhập */}
                {selectedItem.contentNext.foreignPolicy && (
                  <div className="rounded-xl border border-green-500/30 bg-green-50/50 p-4">
                    <h4 className="font-bold text-green-700">Đường lối Đối ngoại & Hội nhập</h4>
                    <ul className="space-y-1 text-sm list-disc pl-5 mt-2">
                      {selectedItem.contentNext.foreignPolicy.map((item, i) => (
                        <li key={`fp-${i}`}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* 4. Chiến lược Bảo vệ Tổ quốc */}
                {selectedItem.contentNext.nationalDefenseStrategy && (
                  <div className="rounded-xl border border-red-500/30 bg-red-50/50 p-4 space-y-4">
                    <h4 className="font-bold text-red-700">Chiến lược Bảo vệ Tổ quốc</h4>
                    
                    <div className="space-y-1">
                      <p className="font-semibold text-sm">Mục tiêu:</p>
                      <ul className="space-y-1 text-sm list-disc pl-5">
                        {selectedItem.contentNext.nationalDefenseStrategy.aims.map((item, i) => (
                          <li key={`aim-${i}`}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <p className="font-semibold text-sm">Nhiệm vụ cơ bản:</p>
                      <ul className="space-y-1 text-sm list-disc pl-5">
                        {selectedItem.contentNext.nationalDefenseStrategy.basicTasks.map((item, i) => (
                          <li key={`task-${i}`}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                
                {/* 5. Chỉ đạo của Trung ương sau Đại hội */}
                {selectedItem.contentNext.postCongressResolutions && (
                  <div className="rounded-xl border p-4 bg-muted/50 space-y-4">
                    <h4 className="font-bold text-gray-800">Chỉ đạo của Trung ương Khóa IX</h4>
                    
                    {/* Kinh tế và Đất đai */}
                    {selectedItem.contentNext.postCongressResolutions.economyAndLand && (
                      <div className="space-y-1">
                        <p className="font-semibold text-sm">Đổi mới Kinh tế & Quản lý Đất đai:</p>
                        <ul className="space-y-1 text-sm list-disc pl-5">
                          {selectedItem.contentNext.postCongressResolutions.economyAndLand.map((item, i) => (
                            <li key={`eco-res-${i}`}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Xây dựng Đảng */}
                    {selectedItem.contentNext.postCongressResolutions.partyBuilding && (
                      <div className="space-y-1">
                        <p className="font-semibold text-sm">Xây dựng Đảng, Tư tưởng & Đạo đức:</p>
                        <ul className="space-y-1 text-sm list-disc pl-5">
                          {selectedItem.contentNext.postCongressResolutions.partyBuilding.map((item, i) => (
                            <li key={`party-res-${i}`}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  </div>
)}



      {/* End Label */}
      <div className="mt-8 flex justify-center">
        <div className="rounded-lg border-2 border-emerald-500 bg-background px-6 py-2 font-bold text-emerald-600 shadow-md">
          HIỆN TẠI
        </div>
      </div>
    </div>
  )
}
