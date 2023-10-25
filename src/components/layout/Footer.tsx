export default function Footer() {
  return (
    <footer className="w-screen flex justify-center">
      <div className="w-full min-w-[805px] max-w-[1400px] relative p-[20px] flex items-center justify-center text-left text-sm bg-white">
        <div className="w-full flex flex-row items-center">
          <div className="grow flex flex-col h-full gap-[50px]">
            <div className="flex flex-row items-start justify-start gap-[30px]">
              <div>홈</div>
              <div>회사소개</div>
              <div>개인정보처리방침</div>
              <div>회사소개서</div>
            </div>
            <div className="relative w-full text-[12px]">
                COPYRIGHT (c) 박철준 ALL RIGHTS RESERVED.
            </div>
          </div>
          <div className="flex flex-col items-end justify-end gap-[8px]">
            <div className="flex flex-row items-center justify-end gap-[50px]">
              <div>회사명 : 온마루</div>
              <div>대표자 : 박철준</div>
            </div>
            <div className="flex flex-row items-center justify-end gap-[20px]">
              <div>전화 : 010-1234-1234</div>
              <div>사업자등록번호 : 000-00-000000</div>
            </div>
            <div className="flex flex-row items-center justify-end gap-[20px]">
              <div>
                주소 : 경기 성남시 야탑동
              </div>
              <div>이메일 : sargadil@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
