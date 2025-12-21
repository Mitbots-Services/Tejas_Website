import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-luxury-admin-dashboard',
  standalone: true,
  template: `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="p-6 bg-dark/50 border border-primary/30 rounded-lg" style="backdrop-filter: blur(10px);">
        <h3 class="text-xl font-heading text-primary">Revenue</h3>
        <canvas id="revenueChart"></canvas>
      </div>
      <div class="p-6 bg-dark/50 border border-primary/30 rounded-lg" style="backdrop-filter: blur(10px);">
        <h3 class="text-xl font-heading text-primary">Bookings</h3>
        <canvas id="bookingsChart"></canvas>
      </div>
      <div class="p-6 bg-dark/50 border border-primary/30 rounded-lg" style="backdrop-filter: blur(10px);">
        <h3 class="text-xl font-heading text-primary">User Registrations</h3>
        <canvas id="usersChart"></canvas>
      </div>
    </div>
  `
})
export class LuxuryAdminDashboardComponent implements AfterViewInit {

  ngAfterViewInit() {
    this.createCharts();
  }

  createCharts() {
    const commonOptions = {
        plugins: {
            legend: {
                labels: {
                    color: '#F5F5F0'
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: { color: '#F5F5F0' },
                grid: { color: 'rgba(245, 245, 240, 0.1)' }
            },
            x: {
                ticks: { color: '#F5F5F0' },
                grid: { color: 'rgba(245, 245, 240, 0.1)' }
            }
        }
    };

    new Chart('revenueChart', {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Revenue (in ₹)',
          data: [120000, 190000, 150000, 210000, 180000, 230000],
          borderColor: '#D4AF37',
          backgroundColor: 'rgba(212, 175, 55, 0.2)',
          fill: true,
          tension: 0.4
        }]
      },
      options: commonOptions
    });

    new Chart('bookingsChart', {
      type: 'bar',
      data: {
        labels: ['Hair', 'Nails', 'Skin', 'Makeup'],
        datasets: [{
          label: '# of Bookings',
          data: [65, 59, 80, 81],
          backgroundColor: [
            'rgba(212, 175, 55, 0.6)',
            'rgba(248, 225, 233, 0.6)',
            'rgba(245, 245, 240, 0.6)',
            'rgba(212, 175, 55, 0.4)'
          ],
          borderColor: [
            '#D4AF37',
            '#F8E1E9',
            '#F5F5F0',
            '#D4AF37'
          ],
          borderWidth: 1
        }]
      },
      options: commonOptions
    });

    new Chart('usersChart', {
        type: 'doughnut',
        data: {
          labels: ['New Users', 'Returning Users'],
          datasets: [{
            label: 'User Base',
            data: [300, 500],
            backgroundColor: [
              '#D4AF37',
              '#F8E1E9',
            ],
            hoverOffset: 4
          }]
        },
        options: {
            plugins: {
                legend: {
                    labels: {
                        color: '#F5F5F0'
                    }
                }
            }
        }
    });
  }
}
