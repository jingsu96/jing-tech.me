import Link from '@/components/CustomLink';
import Image from '@/components/Image';

const RANDOM_IMAGES = ['/static/images/404_1.png', '/static/images/404_2.png'];

const generateRandomImage = () => {
  return RANDOM_IMAGES[Math.floor(Math.random() * RANDOM_IMAGES.length)];
};

export default function NotFound() {
  const randomImage = generateRandomImage();

  return (
    <div className="flex min-h-[100dvh] w-full flex-col items-center justify-center gap-8 bg-bg-primary px-4">
      <div className="flex max-w-md flex-col items-center justify-center gap-4 text-center">
        <Image src={randomImage} width={300} height={300} alt="404 Illustration" className="mx-auto block" />
        <h1 className="mt-[-3.5rem] text-4xl font-bold tracking-tighter sm:text-5xl">Page Not Found</h1>
        <p className="text-gray-500 dark:text-gray-400">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          prefetch={false}
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}
