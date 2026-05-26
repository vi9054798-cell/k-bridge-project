// app/(customer)/pre-gom/page.tsx
"use client";
import React, { useState } from 'react';
import toast from 'react-hot-toast';

export default function PreGomHubPage() {
  const [activeTab, setActiveTab] = useState<'interest-check' | 'active-gom'>('interest-check');
  const [isPollOpen, setIsPollOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  // Form States cho Popup Khảo sát (Đã bỏ state selectedBias)
  const [selectedVersion, setSelectedVersion] = useState('');

  // Dữ liệu giả lập cho thẻ Khảo sát
  const interestCheckCampaigns = [
    {
      id: 1,
      name: "GOM Album NEW WAV - TREASURE (4th Mini Album)",
      estimatedPrice: "340.000đ - 360.000đ",
      currentCommits: 15,
      moq: 20,
      deadline: "2 ngày 14 giờ",
      status: "Khảo sát HOT",
      members: ["Choi Hyun-suk", "Jihoon", "Yoshi", "Junkyu", "Yoon Jae-hyuk", "Asahi", "Doyoung", "Haruto", "Park Jeong-woo", "So Jung-hwan"]
    },
    {
      id: 2,
      name: "GOM BITE NOW  - MEOVV Official",
      estimatedPrice: "950.000đ - 1.050.000đ",
      currentCommits: 8,
      moq: 30,
      deadline: "5 ngày 08 giờ",
      status: "Sắp mở GOM",
      members: ["S.Coups", "Jeonghan", "Joshua", "Jun", "Hoshi", "Wonwoo", "Woozi", "The8", "Mingyu", "DK", "Seungkwan", "Vernon", "Dino"]
    }
  ];

  const handleOpenPoll = (productName: string) => {
    setSelectedProduct(productName);
    setIsPollOpen(true);
  };

  const handleSubmitPoll = (e: React.FormEvent) => {
    e.preventDefault();
    // Đã cập nhật logic validate: Chỉ kiểm tra selectedVersion
    if (!selectedVersion) {
      toast.error("Vui lòng chọn phiên bản mà bạn muốn mua!");
      return;
    }
    toast.success("Cảm ơn bạn! k-Bridge sẽ thông báo ngay khi mở GOM.", { icon: '💌' });
    setIsPollOpen(false);
    setSelectedVersion('');
  };

  return (
    <div className="pt-24 pb-12 px-4 max-w-7xl mx-auto text-white min-h-screen">
      
      {/* Tiêu đề trang */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-black mb-3">Pre-GOM Hub</h1>
        <p className="text-gray-400">Tham gia khảo sát nhu cầu để giúp k-Bridge đàm phán giá sỉ tốt nhất cho Fandom!</p>
      </div>

      {/* 1. Thanh trạng thái chuyển đổi (Tab Switcher) */}
      <div className="flex justify-center mb-12">
        <div className="bg-[#131520] p-1 rounded-xl border border-gray-800 flex gap-1">
          <button 
            onClick={() => setActiveTab('interest-check')}
            className={`px-8 py-3 rounded-lg font-bold transition ${activeTab === 'interest-check' ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/20' : 'text-gray-400 hover:text-white'}`}
          >
            <i className="fa-solid fa-square-poll-vertical mr-2"></i> Khảo sát nhu cầu (Interest Check)
          </button>
          <button 
            onClick={() => setActiveTab('active-gom')}
            className={`px-8 py-3 rounded-lg font-bold transition ${activeTab === 'active-gom' ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/20' : 'text-gray-400 hover:text-white'}`}
          >
            <i className="fa-solid fa-fire text-orange-500 mr-2"></i> Đang mở gom (Active GOM)
          </button>
        </div>
      </div>

      {/* 2. Danh sách Thẻ Khảo sát (Interest Check Cards) */}
      {activeTab === 'interest-check' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
          {interestCheckCampaigns.map((campaign) => (
            <div key={campaign.id} className="bg-[#131520] rounded-2xl border border-gray-800 overflow-hidden flex flex-col hover:border-purple-500/50 transition duration-300 shadow-xl">
              
              {/* Product Teaser (Ảnh) */}
              <div className="h-48 bg-gray-900 relative flex items-center justify-center border-b border-gray-800">
                <i className="fa-solid fa-image text-4xl text-gray-700"></i>
                <div className="absolute top-4 left-4 bg-purple-900/80 text-purple-300 text-xs font-bold px-3 py-1.5 rounded-full border border-purple-500/30 backdrop-blur-sm">
                  {campaign.status}
                </div>
                <div className="absolute bottom-4 right-4 bg-black/80 text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-gray-700 flex items-center gap-2 backdrop-blur-sm">
                  <i className="fa-solid fa-clock text-orange-400"></i> {campaign.deadline}
                </div>
              </div>

              {/* Thông tin đợt GOM */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{campaign.name}</h3>
                <p className="text-purple-400 font-bold mb-6">{campaign.estimatedPrice}</p>

                {/* Demand Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs text-gray-400 mb-2 font-medium">
                    <span>Số lượng cam kết hiện tại: <strong className="text-white">{campaign.currentCommits}/{campaign.moq} người</strong></span>
                    <span>MOQ: {campaign.moq}</span>
                  </div>
                  <div className="h-2.5 w-full bg-gray-900 rounded-full overflow-hidden border border-gray-800">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-600 to-fuchsia-500 rounded-full transition-all duration-1000"
                      style={{ width: `${(campaign.currentCommits / campaign.moq) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Nút CTA Khảo sát */}
                <button 
                  onClick={() => handleOpenPoll(campaign.name)}
                  className="w-full mt-auto bg-gray-800 hover:bg-purple-600 text-white font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2 border border-gray-700 hover:border-purple-500"
                >
                  Tôi muốn tham gia mua <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab Đang mở GOM */}
      {activeTab === 'active-gom' && (
        <div className="text-center py-20 bg-[#131520] rounded-2xl border border-gray-800 animate-fade-in">
          <i className="fa-solid fa-box-open text-4xl text-gray-600 mb-4"></i>
          <h2 className="text-xl font-bold text-gray-400">Các đợt GOM đang mở sẽ hiển thị tại đây</h2>
        </div>
      )}

      {/* 3. QUICK POLL POP-UP (Biểu mẫu khảo sát nhanh) */}
      {isPollOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#131520] p-8 rounded-3xl max-w-md w-full border border-gray-800 shadow-2xl relative">
            <button onClick={() => setIsPollOpen(false)} className="absolute top-4 right-5 text-gray-500 hover:text-white transition text-xl">
              <i className="fa-solid fa-xmark"></i>
            </button>
            
            <h2 className="text-xl font-black mb-2 text-white">Xác nhận nhu cầu tham gia</h2>
            <p className="text-sm text-gray-400 mb-6 line-clamp-1">{selectedProduct}</p>

            <form onSubmit={handleSubmitPoll} className="space-y-6">
              {/* Câu 1: Phiên bản (Đã bỏ chữ "1." vì giờ chỉ còn 1 câu hỏi) */}
              <div className="space-y-3">
                <label className="block text-sm font-bold text-gray-300">Bạn muốn mua phiên bản nào?</label>
                <div className="grid grid-cols-1 gap-2">
                  {['Bản Photobook', 'Bản Digipack', 'Bản Set cả bộ'].map((ver) => (
                    <label key={ver} className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition ${selectedVersion === ver ? 'border-purple-500 bg-purple-900/20 text-white' : 'border-gray-700 bg-gray-900 text-gray-400 hover:border-gray-500'}`}>
                      <input type="radio" name="version" value={ver} checked={selectedVersion === ver} onChange={(e) => setSelectedVersion(e.target.value)} className="hidden" />
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedVersion === ver ? 'border-purple-500' : 'border-gray-500'}`}>
                        {selectedVersion === ver && <div className="w-2 h-2 bg-purple-500 rounded-full"></div>}
                      </div>
                      <span className="text-sm font-medium">{ver}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Phần chọn Bias đã được xóa hoàn toàn theo yêu cầu */}

              {/* Cam kết & Nút Submit */}
              <div className="pt-2">
                <button type="submit" className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 rounded-xl transition shadow-lg shadow-purple-900/20">
                  Gửi khảo sát nhu cầu
                </button>
                <p className="text-[11px] text-gray-500 text-center mt-4 leading-relaxed px-2">
                  <i className="fa-solid fa-circle-info mr-1"></i> Bấm tham gia khảo sát hoàn toàn miễn phí. Hệ thống sẽ tự động gửi thông báo qua Email/Zalo cho bạn ngay khi đợt GOM chính thức được mở để đóng tiền .
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}