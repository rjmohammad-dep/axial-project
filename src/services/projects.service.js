import angular from 'angular';
class Projects {
    constructor() {
        this.projects = [
            {
                headline: 'Funding Strategic Growth in the Restaurant Sector',
                target_check_size_min: 2000000,
                target_check_size_max: 10000000,
                target_revenue_min: 0,
                target_revenue_max: 50000000,
                target_ebitda_min: -2000000,
                target_ebitda_max: 10000000
            },
            {
                headline: 'Funding Strategic Growth in the Restaurant Sector',
                target_check_size_min: 2000000,
                target_check_size_max: 10000000,
                target_revenue_min: 0,
                target_revenue_max: 50000000,
                target_ebitda_min: -2000000,
                target_ebitda_max: 10000000
            },
            {
                headline: 'Funding Strategic Growth in the Restaurant Sector',
                target_check_size_min: 2000000,
                target_check_size_max: 10000000,
                target_revenue_min: 0,
                target_revenue_max: 50000000,
                target_ebitda_min: -2000000,
                target_ebitda_max: 10000000
            },
            {
                headline: 'Funding Strategic Growth in the Restaurant Sector',
                target_check_size_min: 2000000,
                target_check_size_max: 10000000,
                target_revenue_min: 0,
                target_revenue_max: 50000000,
                target_ebitda_min: -2000000,
                target_ebitda_max: 10000000
            },
            {
                headline: 'Funding Strategic Growth in the Restaurant Sector',
                target_check_size_min: 2000000,
                target_check_size_max: 10000000,
                target_revenue_min: 0,
                target_revenue_max: 50000000,
                target_ebitda_min: -2000000,
                target_ebitda_max: 10000000
            },
            {
                headline: 'Funding Strategic Growth in the Restaurant Sector',
                target_check_size_min: 2000000,
                target_check_size_max: 10000000,
                target_revenue_min: 0,
                target_revenue_max: 50000000,
                target_ebitda_min: -2000000,
                target_ebitda_max: 10000000
            },
            {
                headline: 'Funding Strategic Growth in the Restaurant Sector',
                target_check_size_min: 2000000,
                target_check_size_max: 10000000,
                target_revenue_min: 0,
                target_revenue_max: 50000000,
                target_ebitda_min: -2000000,
                target_ebitda_max: 10000000
            },
            {
                headline: 'Something',
                target_check_size_min: 2000000,
                target_check_size_max: 10000000,
                target_revenue_min: 0,
                target_revenue_max: 50000000,
                target_ebitda_min: -2000000,
                target_ebitda_max: 10000000
            },
        ];
    }

    removeProject(index) {
        this.projects = [...this.projects.slice(0, index), ...this.projects.slice(index + 1)];
    }

    update(obj, index) {
        this.projects = [...this.projects.slice(0, index), obj, ...this.projects.slice(index + 1)];;
    }

    add(obj) {
        this.projects = [obj, ...this.projects];
    }

}

export default angular.module('service.projects', [])
    .service('projectsData', Projects)
    .name;