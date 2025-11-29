export default function Footer() {
  return (
    <footer className="p-4">
      <p>
        &copy;
        {' '}
        {new Date().getFullYear()}
        {' '}
        Ruairí Donaghey. All rights reserved.
      </p>
    </footer>
  );
}
