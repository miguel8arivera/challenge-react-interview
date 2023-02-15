import React, { FC } from 'react';
import { Col, Row, InputGroup, Form } from 'react-bootstrap';

type SearchbarProps = {
  searchValue: string;
  onSearchValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Searchbar: FC<SearchbarProps> = function ({
  searchValue,
  onSearchValueChange,
}: SearchbarProps) {
  return (
    <>
      <Row className="justify-content-center mt-3 mb-3">
        <Col lg={6} md={12} sm={12}>
          <InputGroup>
            <Form.Control
              value={searchValue}
              onChange={onSearchValueChange}
              placeholder="Search Characters"
              aria-label="Search Characters"
            />
          </InputGroup>
        </Col>
      </Row>
    </>
  );
};

export default React.memo(Searchbar);
