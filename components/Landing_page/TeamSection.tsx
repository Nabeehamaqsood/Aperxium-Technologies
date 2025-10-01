import { teamMembers } from "@/data/team"
import { Card, CardContent } from "@/components/ui/card"

export default function TeamSection() {
  return (
    <section className="py-20 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Meet the Apexium Team</h2>
        <p className="text-lg text-gray-700 mb-10">
          A diverse group of passionate innovators driving the future of technology.
        </p>

        {/* ✅ Team Grid with minimal gap */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-1.5 lg:gap-2 justify-center">
          {teamMembers.slice(0, 4).map((member, index) => (
            <Card
              key={index}
              className="rounded-xl w-full aspect-[4/5] max-w-[180px] sm:max-w-[200px] lg:max-w-[260px] mx-auto
                         bg-gradient-to-br from-[#2e8f7f] to-[#3db1a2] 
                         text-white text-center shadow-lg hover:shadow-2xl 
                         hover:scale-105 transition-all duration-300 flex items-center justify-center"
            >
              <CardContent className="flex flex-col items-center text-center p-2 sm:p-3 w-full">
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-lg overflow-hidden mb-2 sm:mb-3 border-4 border-white shadow-md bg-white">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold">{member.name}</h3>
                <p className="text-xs sm:text-sm font-medium opacity-90">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-12">
          <a
            href="/team"
            className="inline-block px-6 py-3 text-lg font-medium text-white bg-[#3db1a2] rounded-md hover:bg-[#2e8f7f] transition-colors"
          >
            View More Team Members
          </a>
        </div>
      </div>
    </section>
  )
}