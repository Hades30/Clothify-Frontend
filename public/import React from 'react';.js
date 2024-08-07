import React from 'react';

const ShoppingPage = () => {
  const items = [
    {
      title: 'T-shirt for women',
      imageUrl: 'https://cdn.usegalileo.ai/sdxl10/0065aebb-b0db-450d-ba4f-fbbbb3af56f5.png',
      seller: 'Amazon',
      shipping: 'Free shipping'
    },
    {
      title: 'Womens Summer Dress',
      imageUrl: 'https://cdn.usegalileo.ai/sdxl10/f762827f-361d-4422-bd19-607f821e8079.png',
      seller: 'Amazon',
      shipping: 'Free shipping'
    },
    {
      title: 'Women\'s Summer Shorts',
      imageUrl: 'https://cdn.usegalileo.ai/sdxl10/8c4e20c9-6d59-4dd5-a4c9-eb2562cd81ce.png',
      seller: 'Amazon',
      shipping: 'Free shipping'
    },
    {
      title: 'Women\'s Pajamas Set',
      imageUrl: 'https://cdn.usegalileo.ai/sdxl10/6a9dac84-ae42-4bc6-b836-e1ab07f6e810.png',
      seller: 'Amazon',
      shipping: 'Free shipping'
    },
    {
      title: 'Women\'s Mini Skirt',
      imageUrl: 'https://cdn.usegalileo.ai/sdxl10/61178f6b-34e2-4046-9a94-f633021d4a68.png',
      seller: 'Amazon',
      shipping: 'Free shipping'
    }
  ];

  return (
    <div style={{ fontFamily: '"Be Vietnam Pro", "Noto Sans", sans-serif', backgroundColor: '#F1F5F9', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
       
        <h3 style={{ color: '#0e141b', fontSize: '18px', fontWeight: 'bold', lineHeight: '1.25', padding: '16px 16px 8px 16px' }}>Sponsored</h3>
        {items.map((item, index) => (
          <div key={index} style={{ padding: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', borderRadius: '12px', overflow: 'hidden' }}>
              <div
                style={{
                  width: '100%',
                  height: '0',
                  paddingBottom: '56.25%',
                  backgroundImage: `url(${item.imageUrl})`,
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover'
                }}
              ></div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '16px' }}>
                <p style={{ color: '#0e141b', fontSize: '18px', fontWeight: 'bold', lineHeight: '1.25' }}>{item.title}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <p style={{ color: '#4e7397', fontSize: '16px' }}>{item.seller}</p>
                    <p style={{ color: '#4e7397', fontSize: '16px' }}>{item.shipping}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid #e7edf3', backgroundColor: '#F1F5F9', padding: '8px 16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <a style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#0e141b', textDecoration: 'none' }} href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path>
            </svg>
            <p style={{ fontSize: '12px', fontWeight: '500', lineHeight: '1.5' }}>Home</p>
          </a>
          <a style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#4e7397', textDecoration: 'none' }} href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM40,112H80v32H40Zm56,0H216v32H96ZM216,64V96H40V64ZM40,160H80v32H40Zm176,32H96V160H216v32Z"></path>
            </svg>
            <p style={{ fontSize: '12px', fontWeight: '500', lineHeight: '1.5' }}>Categories</p>
          </a>
          <a style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#4e7397', textDecoration: 'none' }} href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
            </svg>
            <p style={{ fontSize: '12px', fontWeight: '500', lineHeight: '1.5' }}>Search</p>
          </a>
          <a style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#4e7397', textDecoration: 'none' }} href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 
