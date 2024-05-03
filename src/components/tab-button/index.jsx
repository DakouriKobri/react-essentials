export default function TabButton({ children, onSelect }) {
  console.log('TabButton rendered');

  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
