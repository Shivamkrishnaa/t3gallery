import Link from "next/link";
const mockUrls = [
  "https://utfs.io/f/efa3150d-48fd-4ab4-86fe-e5f818e4fd8f-4l5lzq.02.14.jpeg",
  "https://utfs.io/f/a38db077-e364-44b9-9b1e-10263862339a-nkw1q9.57.53.jpeg",
  "https://utfs.io/f/d9ee7d77-c380-49df-a85f-048d471c3376-i8rq8f.png",
  "https://utfs.io/f/2f7b3ef7-b069-470f-aa5f-5c4879ee89c9-f0gxn5.JPG"
];
const mockImage = mockUrls.map((url, index) => ({
  id: index+1,
  url
}))
export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImage, ...mockImage, ...mockImage].map(image => (
          <div key={image.id} className="w-48 p-4">
            <img src={image.url}/>
            </div>
        ))}
      </div>
    </main>
  );
}
