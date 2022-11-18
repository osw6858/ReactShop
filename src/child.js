function ChildComponent(probs) {
  const { name, age } = probs;
  return (
    <p>
      나는 {name}이고 나이는 {age}살 입니다.
    </p>
  );
}

export default ChildComponent;
