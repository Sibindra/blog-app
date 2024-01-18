import BlogList from "@/components/blog-list/blog-list";

export default async function Home() {

  console.log('api url = ',process.env.API_URL)

  return (
    <main>
      <div className=" w-full min-h-96 flex justify-center items-center ">
        <p className=" text-2xl font-medium p-5 tracking-wider leading-10">
          Welcome to my Blog!
          <br />
          I'm Sibendra and here I Document my Latest Explorations.
        </p>
      </div>

      <BlogList />
    </main>
  )
}
