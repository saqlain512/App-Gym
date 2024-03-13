import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
function footer() {
    return (
        <div className="w-full relative flex flex-col items-end justify-start pt-[43px] px-0 pb-0 box-border gap-[50.5px_0px] bg-[url('/public/root@3x.png')] bg-cover bg-no-repeat bg-[top] tracking-[normal] text-left text-[9px] text-gray-100 font-inter mq750:gap-[25px_0px]">
            <img
                className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover hidden z-[0]"
                alt=""
                src="/image@2x.png"
            />
            <img
                className="w-[1348px] h-[589px] absolute !m-[0] right-[-143px] bottom-[-25px] object-cover z-[1]"
                alt=""
                src="/image@2x.png"
            />
            <div className="absolute !m-[0] right-[-57px] bottom-[3px] z-[2]">
                Et blenplus
            </div>
            <FrameComponent2 />
            <section className="w-[1160px] flex flex-row items-start justify-start py-0 pr-0 pl-5 box-border gap-[0px_42px] max-w-full text-left text-xl text-lightgray-300 font-inter mq750:gap-[0px_21px] mq1025:flex-wrap">
                <div className="w-44 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border text-[19px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[18px_0px]">
                        <h3 className="m-0 w-[156px] h-[18px] relative text-inherit font-normal font-inherit flex items-center shrink-0 box-border pr-5 z-[2]">
                            MYACCOUNT
                        </h3>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[21.67px_0px] text-sm text-lightgray-800">
                            <div className="w-[94px] relative flex items-center box-border pr-5 z-[2]">
                                Contactus
                            </div>
                            <div className="w-[60px] relative text-silver-900 flex items-center box-border pr-5 z-[2]">
                                Login
                            </div>
                            <div className="w-[99px] relative text-silver-400 flex items-center box-border pr-5 z-[2]">
                                Myaccount
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start gap-[26px_0px] text-silver-200">
                                <div className="w-[122px] relative flex items-center box-border pr-5 z-[2]">
                                    OrderTracking
                                </div>
                                <div className="self-stretch flex flex-col items-start justify-start gap-[21.33px_0px] text-lightgray-200">
                                    <h3 className="m-0 self-stretch h-[17px] relative text-[21px] font-normal font-inherit flex items-center shrink-0 z-[2] mq450:text-[17px]">
                                        SPECIALOFFERS
                                    </h3>
                                    <div className="w-[98px] relative text-silver-100 flex items-center box-border pr-5 z-[2]">
                                        Pricesdrop
                                    </div>
                                    <div className="w-[115px] relative text-lightgray-1100 flex items-center box-border pr-5 z-[2]">
                                        Newproducts
                                    </div>
                                    <div className="w-[90px] relative text-silver-400 flex items-center box-border pr-5 z-[2]">
                                        Bestsales
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-[0.9661] flex flex-col items-start justify-start py-0 pr-[15px] pl-0 box-border gap-[17px_0px] min-w-[287px] max-w-full text-gainsboro-200 mq1025:flex-1">
                    <h3 className="m-0 self-stretch relative text-inherit font-normal font-inherit pr-[18px] z-[2] mq450:text-base">
                        CUSTOMER SERVICE CONTACTDETAILS
                    </h3>
                    <FrameComponent1 />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border min-w-[285px] max-w-full text-gainsboro-100 mq1025:flex-1">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[41px_0px] max-w-full mq450:gap-[20px_0px]">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[11px_0px] max-w-full">
                            <h3 className="m-0 w-[203px] h-[19px] relative text-inherit font-normal font-inherit flex items-center shrink-0 box-border pr-5 z-[2] mq450:text-base">
                                STAY UPTO DATE
                            </h3>
                            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full text-base text-lightgray-900">
                                <div className="flex-1 flex flex-col items-start justify-start pt-3.5 px-[21px] pb-[18px] box-border relative max-w-full">
                                    <div className="w-[449px] h-full absolute !m-[0] top-[0px] right-[-13px] bottom-[0px]">
                                        <img
                                            className="absolute top-[0px] left-[0px] w-[449px] h-12 object-cover z-[2]"
                                            alt=""
                                            src="/groups@2x.png"
                                        />
                                        <img
                                            className="absolute top-[14px] left-[401px] w-[25px] h-[18px] object-cover z-[3]"
                                            loading="lazy"
                                            alt=""
                                            src="/image-9@2x.png"
                                        />
                                    </div>
                                    <div className="w-[55px] relative flex items-center z-[3]">
                                        E-mail
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 px-[5px]">
                            <div className="flex flex-row items-start justify-start gap-[0px_5px]">
                                <img
                                    className="h-[63px] w-[62px] relative object-cover min-h-[63px] z-[2]"
                                    loading="lazy"
                                    alt=""
                                    src="/image-10@2x.png"
                                />
                                <img
                                    className="h-[63px] w-[63px] relative object-cover min-h-[63px] z-[2]"
                                    loading="lazy"
                                    alt=""
                                    src="/image-11@2x.png"
                                />
                                <img
                                    className="h-[63px] w-16 relative object-cover min-h-[63px] z-[2]"
                                    loading="lazy"
                                    alt=""
                                    src="/image-12@2x.png"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FrameComponent />
        </div>
    )
}

export default footer