import Card from "../components/Card"

function About() {
  return (
    <section
    className="c-space section-spacing">
        <h2
        className="text-heading">
            About Me
        </h2>
        <div
        className="grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[18rem] mt-12">
            {/* Grid 1*/}
            <div
            className="flex items-end grid-default-color grid-1">
                <img src="/assets/coding-pov.png"
                className="absolute scale-[1.75] -right-20 -top-4 md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"  />
                <div
                className="z-10">
                    <p
                    className="headtext">
                        I'm Abdullah Askari
                    </p>
                    <p
                    className="subtext">
                        I am a software engineer specializing in React Native
                        mobile app development and modern web technologies.
                    </p>
                </div>
                <div
                className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
            </div>
            {/* Grid 2*/}
            <div
            className="grid-default-color grid-2">
                <div
                className="flex items-center justify-center w-full h-full">
                    <p
                    className="flex items-end text-5xl text-gray-500">
                        CODE IS CRAFT
                    </p>
                     <Card text="GRASP"
                      style={{ rotate: "75deg", top: "30%", left: "20%" }}/>
                      <Card
                      text="SOLID"
                       style={{ rotate: "-30deg", top: "60%", left: "45%" }}/>
                      <Card text="Design Patterns"
                       style={{ rotate: "90deg", bottom: "30%", left: "70%" }}/>
                       <Card text="Design Principles"
                        style={{ rotate: "-45deg", top: "55%", left: "3%" }}/>
                        <Card text="SRP"
                         style={{ rotate: "20deg", top: "10%", left: "38%" }}/>
                         <Card
                         image="/assets/logos/csharp-pink.png"
                        style={{ rotate: "30deg", bottom: "70%", left: "70%" }}/>
                        <Card
                        image="/assets/logos/dotnet-pink.png"
                        style={{ rotate: "-45deg", top: "70%", left: "25%" }}/>
                        <Card
                        image="/assets/logos/react.svg"
                        style={{ rotate: "45deg", bottom: "70%", left: "25%" }}/>
                </div>
            </div>
            <div
            className="grid-black-color grid-3">
            </div>
            <div
            className="grid-special-color grid-4">
            </div>
            <div
            className="grid-default-color grid-5"></div>
            </div>
    </section>
  )
}

export default About