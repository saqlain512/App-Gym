function FooterComponent(){
    return (
      <div className="w-[1202px] flex flex-row items-start justify-start py-0 pr-0 pl-5 box-border relative max-w-full text-left text-base text-darkgray font-inter">
        <div className="w-[226px] absolute !m-[0] right-[419px] bottom-[-12px] flex items-center z-[2]">
          PAIEMENT 1OO% SECURISE
        </div>
        <div className="w-[351px] absolute !m-[0] bottom-[-14px] left-[92px] text-sm text-gray-200 flex items-center z-[2]">
          2020-2023 Bullman Equipment.AllRights Reserved.
        </div>
        <div className="h-[58px] flex-1 flex flex-row items-start justify-between pt-0 px-0 pb-0 box-border max-w-full gap-[20px] text-6xs text-lightsteelblue">
          <img
            className="h-[66px] w-[66px] relative object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/image-13@2x.png"
          />
          <div className="h-[58px] w-[299px] flex flex-col items-start justify-start pt-[35px] px-0 pb-0 box-border">
            <div className="self-stretch flex flex-row items-start justify-start relative">
              <img
                className="h-[26px] w-8 absolute !m-[0] top-[calc(50%_-_13px)] right-[42px] object-cover z-[2]"
                loading="lazy"
                alt=""
                src="/image-14@2x.png"
              />
              <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                <div className="flex flex-row items-end justify-start gap-[0px_13px]">
                  <div className="h-[23px] flex flex-col items-start justify-start py-0 pr-[5px] pl-0 box-border">
                    <img
                      className="w-7 h-[21px] relative object-cover z-[2]"
                      loading="lazy"
                      alt=""
                      src="/image-15@2x.png"
                    />
                  </div>
                  <div className="h-[23px] flex flex-col items-start justify-start py-0 pr-1 pl-0 box-border">
                    <div className="flex flex-row items-start justify-start py-1 pr-[5px] pl-[3px] bg-[url('/public/text-element@3x.png')] bg-cover bg-no-repeat bg-[top] z-[2]">
                      <img
                        className="h-[21px] w-7 relative object-cover hidden"
                        alt=""
                        src="/groups@2x.png"
                      />
                      <div className="relative z-[3]">VISA</div>
                    </div>
                  </div>
                  <div className="h-[23px] flex flex-col items-start justify-start py-0 pr-1 pl-0 box-border">
                    <img
                      className="w-[29px] h-[21px] relative object-cover z-[2]"
                      loading="lazy"
                      alt=""
                      src="/image-16@2x.png"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0.5">
                    <img
                      className="w-7 h-[21px] relative object-cover z-[2]"
                      loading="lazy"
                      alt=""
                      src="/image-17@2x.png"
                    />
                  </div>
                  <div className="h-7 w-9 relative bg-gray-300 z-[2]">
                    <img
                      className="absolute right-[3px] bottom-[2px] w-[29px] h-[21px] object-cover"
                      alt=""
                      src="/groups-1@2x.png"
                    />
                    <img
                      className="absolute right-[3px] bottom-[2px] w-[29px] h-[21px] object-cover z-[1]"
                      loading="lazy"
                      alt=""
                      src="/image-18@2x.png"
                    />
                  </div>
                </div>
                <div className="w-[26px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border text-3xs text-lightslategray">
                  <div className="self-stretch flex flex-row items-start justify-start pt-[5px] px-px pb-1 bg-[url('/public/text-element1@3x.png')] bg-cover bg-no-repeat bg-[top] z-[2]">
                    <img
                      className="h-[21px] w-[29px] relative object-cover hidden"
                      alt=""
                      src="/groups@2x.png"
                    />
                    <div className="flex-1 relative z-[3]">BPA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}
export default FooterComponent