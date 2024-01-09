import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: #bbb9b9;
`;

const StyledTh = styled.th`
  background-color: #f2f2f2;
  padding: 10px;
  text-align: left;
`;

const StyledTd = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
`;

const TransactionHistory = ({ items }) => {
  return (
    <StyledTable className="transaction-history">
      <thead>
        <tr>
          <StyledTh>Type</StyledTh>
          <StyledTh>Amount</StyledTh>
          <StyledTh>Currency</StyledTh>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <StyledTd>{item.type}</StyledTd>
            <StyledTd>{item.amount}</StyledTd>
            <StyledTd>{item.currency}</StyledTd>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default TransactionHistory;
